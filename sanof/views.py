from hashlib import new
from django.core.checks import messages
from django.core.files.base import ContentFile
from django.http import request
from django.http.response import Http404
from django.shortcuts import get_object_or_404, redirect, render, reverse
from .forms import ContactForm
from .models import LinkAparat, Portfolio, PortfolioImages, Slider, Category, Product, News, Services, Questions, Certificates,  ContactUs
from django.utils.translation import gettext_lazy as _
from django.utils import translation
from django.db.models import Q

# Create your views here.
from django.db import connection, reset_queries
import time

def debugger(func):
    def wrapper(*args, **kwargs):
        reset_queries()
        start_time = time.time()
        value = func(*args, **kwargs)
        end_time = time.time()
        queries = len(connection.queries)
        print(f"------------------connection number: {queries}----time: {start_time-end_time}")
        return value
    return wrapper


def change_language(request):
    lang = request.GET['lang']
    translation.active = lang

    return redirect('sanof:index')

def index(request):
    lang = translation.get_language()
    list = ['slug_'+lang, 'title_'+lang, 'image']
    sliders = Slider.objects.only(*list)
    
    categories = Category.objects.all()
    questions = Questions.objects.all()

    context = {
        'sliders':sliders,
        'categories':categories,
        'questions':questions,
    }

    html = 'index_'+lang+'.html'
    return render(request, html, context)


def services(request):
    lang = translation.get_language()
    list = ['slug_'+lang, 'title_'+lang, 'image']
    services=Services.objects.only(*list)

    context = {
        'services':services,
        'service':True
    }
    
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)


def service(request, slug):
    lang = translation.get_language()
    service = get_object_or_404(Services, slug_en=slug)
        list = ['slug_'+lang, 'title_'+lang, 'image']

    services = Services.objects.exclude(id=service.id).order_by('?')[:4].only(*list)

    context = {
        'service':service,
        'services':services
    }

    html = 'show_object_'+lang+'.html'
    return render(request, html, context)
   

def about(request):
    lang = translation.get_language()
    html = 'about_'+lang+'.html'
    return render(request, html)
   
def portfolios(request):
    lang = translation.get_language()
    list = ['slug_'+lang, 'title_'+lang, 'image', 'date]

    portfolios = Portfolio.objects.only(*list)

    context = {
        'portfolios':portfolios,
        'portfolio':True,
    }
   
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)
 
def search(request):
    key = request.GET['productName']
    products = Product.objects.filter(searching__icontains=key)
    context = {
        'products':products
    }

    return render(request, 'search.html', context)

def portfolio(request, slug):
    lang = translation.get_language()
    portfolio = get_object_or_404(Portfolio, slug=slug)
    images = PortfolioImages.objects.filter(portfolio=portfolio).only('image')

    context = {
        'portfolio':portfolio,
        'images':images
    }
  
    html = 'show_object_'+lang+'.html'
    return render(request, html, context)

def contact_us(request):
    lang = translation.get_language()
    html = 'contact_' + lang + '.html'
    return render(request, html)

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            form.save()
            messages.success(request, _('Your message was successfully registered'), 'success')
            return redirect('sanof:contact')
        else:
            form = ContactForm(request.POST)
            return render(request, 'contact.html',{'form':form})

    else:
        form = ContactForm()

        context = {
            'form':form
        }
        return render(request, 'contact.html', context)
       

def products(request):
    lang = translation.get_language()
    list = ['name_'+lang, 'title_'+lang, 'image','category']
    products = Product.objects.select_related('category').only(*list)

    context = {
        'products':products,
        'product':True,
    }
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)


def product(request, slug):
    lang = translation.get_language()
    product = Product.objects.filter(Q(slug_en=slug)|Q(slug_fa=slug)|Q(slug_ar=slug)).first()
    if not product:
        raise  Http404()
    list = ['slug_'+lang, 'title_'+lang]
    products = Product.objects.filter(category=product.category).only(*list)
    films = LinkAparat.objects.filter(wich_product = product).only('link','title')

    context = {
        'product':product,
        'products':products,
        'films':films
    }
    
    html = 'product_'+lang+'.html'
    return render(request, html, context)


def categories(request, slug):
    lang = translation.get_language()
    category = get_object_or_404(Category, slug_en=slug)
    if not category:
        raise Http404()
            
    list = ['slug_'+lang, 'name_'+lang, 'category']
    products = Product.objects.filter(category = category).select_related('category').only(*list)

    context = {
        'products':products,
        'category':True,
        'categories':category,
    }
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)
  

def newses(request):
    lang = translation.get_language()
            
    list = ['slug_'+lang, 'title_'+lang, 'image', 'date]
    newses = News.objects.only(*list)

    context = {
        'newses':newses,
        'newse':True,
    }
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)
   

def news(request, slug):
    lang = translation.get_language()
    news = News.objects.filter(Q(slug_en=slug)|Q(slug_fa=slug)|Q(slug_ar=slug)).first()
    if not news:
        raise  Http404()

    list = ['slug_'+lang, 'title_'+lang, 'image', 'date']
    newses = News.objects.exclude(id=news.id).order_by('?')[:4].only(*list)

    context = {
        'news':news,
        'newses':newses,
    }
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)

def all_categories(request):
    categories = Category.objects.all().prefetch_related('all_product')
    lang = translation.get_language()
    html = 'show_list_'+lang+'.html'

    context = {
        'categories':categories,
        'all_category':True
    }
    
    return render(request, html, context)


def certificates(request):
    lang = translation.get_language()
    if lang == 'fa':
        certificates = Certificates.objects.filter(show_fa=True)
    if lang == 'ar':
        certificates = Certificates.objects.filter(show_ar=True)
    if lang == 'en':
        certificates = Certificates.objects.filter(show_en=True)

    context = {
        'certificates':certificates,
        'certificate':True,
    }
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)
   
def sliders(request):
    lang = translation.get_language()
    
    list = ['slug_'+lang, 'title_'+lang, 'image']
    sliders = Slider.objects.only(*list)

    context = {
        'sliders':sliders,
        'slider':True,
    }
    html = 'show_list_'+lang+'.html'
    return render(request, html, context)

def slider(request, slug):
    lang = translation.get_language()
    slider = Slider.objects.filter(Q(slug_en=slug)|Q(slug_fa=slug)|Q(slug_ar=slug)).first()
    if not slider:
        raise Http404()

    list = ['slug', 'title_'+lang, 'image']
    sliders = Slider.objects.exclude(id=slider.id).order_by('?')[:4].only(*list)
   
    context = {
        'slider':slider,
        'sliders':sliders
    }
    html = 'show_object_'+lang+'.html'
    return render(request, html, context)

def notifications(request):
    if request.user.is_authenticated and request.user.is_superuser:
        all_messages = ContactUs.objects.all().order_by('checked', '-id')

        context = {
            'all_messages':all_messages,
            'all_message':True,
        }

        return render(request, 'show_list_fa.html', context)
    else:
        raise Http404()

def notification(request, pk):
    if request.user.is_authenticated and request.user.is_superuser:
        message = get_object_or_404(ContactUs, pk=pk)
        message.checked = True
        message.save()
        return redirect('sanof:notifications')
    else:
        raise Http404()
