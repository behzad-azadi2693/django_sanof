from django import template
from sanof.models import Category, Slider, Product
from django.http import request

register = template.Library()

@register.inclusion_tag('include/navbar.html')
def list_menu(request):
    category = Category.objects.prefetch_related('all_product').only('name_en','name_fa','name_ar', 'slug_en', 'slug_fa','slug_ar', 'id')
    sliders = Slider.objects.only('title_en','title_fa', 'title_ar', 'slug_en')
    products = Product.objects.all()
    
    context = {
        'category':category,
        'request':request,
        'sliders':sliders,
        'products':products
    }

    return context