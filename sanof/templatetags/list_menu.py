from django import template
from sanof.models import Category, Slider, Product
from django.http import request
from django.utils import translation
from django.db.models import OuterRef, Subquery, Prefetch

register = template.Library()

@register.inclusion_tag('include/navbar.html')
def list_menu(request):
    lang = translation.get_language()

    fields = ['slug'+lang, 'name'+lang]
    listss = ['title'+lang, 'slug'+lang]
    category = Category.objects.prefetch_related(Prefetch('all_product',queryset=Products.objects.filter(show_navbar=True))).only(*fields)
    sliders = Slider.objects.only(*lists)
    products = Product.objects.all()
    
    context = {
        'category':category,
        'request':request,
        'sliders':sliders,
        'products':products
    }

    return context
