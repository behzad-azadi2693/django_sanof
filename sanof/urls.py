from django.urls import path, re_path

from .sitemaps import ProductSitemap, NewsSitemap, ServicesSitemap, PortfolioSitemap, SliderSitemap
from django.contrib.sitemaps.views import sitemap

from .views import (
                index, about, contact, certificates,notification, notifications,
                products, product, newses, news, portfolios, portfolio, search,
                categories, sliders, slider,services, service, all_categories,
                change_language, contact_us
            )

app_name = 'sanof'

sitemaps = {
    'product':ProductSitemap,
    'service':ServicesSitemap,
    'slider':SliderSitemap,
    'portfolio':PortfolioSitemap,
    'news':NewsSitemap,
}

urlpatterns = [
    path('', index, name='index'),
    path('services/', services, name='services'),
    path('service/<str:slug>/', service, name='service'),
    path('about-us/', about, name='about'),
    path('portfolios/', portfolios, name='portfolios'),
    path('portfolio/<str:slug>/', portfolio, name='portfolio'),
    path('categories/<str:slug>/', categories, name='categories'),
    path('categories/', all_categories, name='all_categories'),
    path('contact-us/', contact_us, name='contact_us'),
    path('contact/', contact, name='contact'),
    path('products/', products, name='products'),
    path('product/<str:slug>/', product, name='product'),
    path('news/', newses, name='newses'),
    path('news/<str:slug>/', news, name='news'),
    path('certifictes/', certificates, name='certificates'),
    path('slider/<str:slug>/', slider, name='slider'),
    path('sliders/', sliders, name='sliders'),
    path('notifications/', notifications, name='notifications'),
    path('notification/<int:pk>/', notification , name='notification'),
    path('sitemap/', sitemap, {'sitemaps':sitemaps}, name="sitemap"),
    path('Search/', search, name='search'),
    path('change_language/', change_language, name='change_language'),
]
