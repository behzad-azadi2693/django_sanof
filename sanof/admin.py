from django.contrib import admin
from jalali_date.admin import ModelAdminJalaliMixin
from jalali_date import datetime2jalali, date2jalali

from sanof.views import portfolios

# Register your models here.
from .models import (
            Portfolio, Slider, Category, Product, News, 
            Services, Questions, Certificates, ContactUs,
            PortfolioImages, LinkAparat, CategoryCertificate,
            CategoryPortfolio
        )

admin.site.register(Slider)
admin.site.register(CategoryPortfolio)
admin.site.register(CategoryCertificate)
admin.site.register(Category)
admin.site.register(News)
admin.site.register(Services)
admin.site.register(Questions)
admin.site.register(ContactUs)
admin.site.register(LinkAparat)

@admin.register(Certificates)
class CertificatesAdmin(ModelAdminJalaliMixin, admin.ModelAdmin):
    list_display = [field.name for field in Certificates._meta.get_fields()]

    def get_date(self, obj):
        return datetime2jalali(obj.date).strftime('%y/%m/%d _ %H:%M:%S')

class LinkAparatAdmin(admin.TabularInline):
    model = LinkAparat
    fields = ( 'link','title', 'wich_product')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [
        LinkAparatAdmin,
    ]    


class PortfolioImageInline(admin.TabularInline):
    model = PortfolioImages
    fields = ('image','portfolio')

class PortfolioAdmin(ModelAdminJalaliMixin, admin.ModelAdmin):
    
    inlines = [
        PortfolioImageInline,
    ]
    
    def get_date(self, obj):
        return datetime2jalali(obj.date).strftime('%y/%m/%d _ %H:%M:%S')

admin.site.register(Portfolio, PortfolioAdmin)
admin.site.register(PortfolioImages)
