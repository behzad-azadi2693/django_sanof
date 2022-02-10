from django.contrib import sitemaps
from .models import Slider, Product, News, Portfolio, Services
from django.contrib.sitemaps import Sitemap

class SliderSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.6

    def items(self):
        return Slider.objects.all()

class ProductSitemap(Sitemap):
    changefreq = 'daily'
    priority = 0.9

    def items(self):
        return Product.objects.all()

class NewsSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.4

    def items(self):
        return News.objects.all()

class PortfolioSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.8

    def items(self):
        return Portfolio.objects.all()


class ServicesSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.7

    def items(self):
        return Services.objects.all()