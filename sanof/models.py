from django.db import models
from jalali_date import date2jalali
from uuid import uuid4
from django.core.validators import RegexValidator
from ckeditor_uploader.fields import RichTextUploadingField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
import os
from django.utils import translation
# Create your models here.

def path_save_category(instance, filename):
    path_save = os.path.join('category', instance.name_en, filename)
    return path_save

class Category(models.Model):
    name = models.CharField(max_length=250, verbose_name=_('category name'), unique=True)
    description = RichTextUploadingField(verbose_name=_('description english'))
    image = models.ImageField(upload_to='category/', verbose_name=_('image'))
    slug = models.CharField(default = uuid4(), max_length=500)
   

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('category')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.name_fa
        elif lang == 'ar':
            return self.name_ar
        else:
            return self.name_en

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Category, self).delete()

    def save(self, *args, **kwargs):
        try:
            slti_en = self.name_en.replace(' ','-') 
            slti_fa = self.name_fa.replace(' ','-') 
            slti_ar = self.name_ar.replace(' ','-') 
            self.slug_en = slti_en
            self.slug_fa = slti_fa
            self.slug_ar = slti_ar
            this = Category.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except: 
            pass

        super(Category, self).save(*args, **kwargs)



def path_save_product(instance, filename):
    path_save = os.path.join('product', instance.name_en, filename)
    return path_save

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING,related_name='all_product', verbose_name=_('which category'))
    name = models.CharField(max_length=200, verbose_name=_('product name'))
    image = models.ImageField(upload_to=path_save_product, verbose_name=_('image'))
    title = models.CharField(max_length=500, verbose_name=_('product title '), unique=True)
    standard = models.CharField(max_length=300, null=True, blank=True, verbose_name=_('Complies with standard'))
    type_category = models.CharField(max_length=200, null=True, blank=True, verbose_name=_('Package type'))
   

    maintenance = RichTextUploadingField(null=True, blank=True, verbose_name=_('maintenance'))
    
    consumption_level = RichTextUploadingField(null=True, blank=True, verbose_name=_('consumption level'))
   
    description = RichTextUploadingField(null=True, blank=True, verbose_name=_('description ')) 
    
    safety = RichTextUploadingField(null=True, blank=True, verbose_name=_('safety'))
   
    consumption = RichTextUploadingField(null=True, blank=True, verbose_name=_('consumption')) 
   
    properties = RichTextUploadingField(null=True, blank=True, verbose_name=_('properties'))   

    application = RichTextUploadingField(null=True, blank=True, verbose_name=_('application'))      
  
    specifications = RichTextUploadingField(null=True, blank=True, verbose_name=_('specifications')) 
   
    catalog = models.FileField(upload_to=path_save_product,null=True,blank=True, verbose_name=_('catalog'))
 
    show_navbar = models.BooleanField(default=True, verbose_name=_('to be displayed in navbar??'))
    searching = models.TextField(verbose_name=_('keyword serching'))
    slug = models.CharField(default = uuid4(), max_length=500)
   

    class Meta:
        verbose_name = _('Product')
        verbose_name_plural = _('Products')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.name_fa
        elif lang == 'ar':
            return self.name_ar
        else:
            return self.name_en

    def get_absolute_url(self):
        return reverse('sanof:product', kwargs={"slug": self.slug_en})

    def delete(self, *args, **kwargs):
        self.image.delete()
        self.catalog.delete()
        super(Product, self).delete()

    def save(self, *args, **kwargs):
        try:
            slti_en = self.title_en.replace(' ','-') 
            slti_fa = self.title_fa.replace(' ','-') 
            slti_ar = self.title_ar.replace(' ','-') 
            self.slug_en = slti_en
            self.slug_fa = slti_fa
            self.slug_ar = slti_ar
            this = Product.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
            if this.catalog != self.catalog:
                this.catalog.delete()
        except: 
            pass

        super(Product, self).save(*args, **kwargs)

class LinkAparat(models.Model):
    wich_product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name=_('which product??'))
    title = models.CharField(max_length=500,null=True,blank=True, verbose_name=_('title for this link'))
    link = models.URLField(null=True,blank=True,verbose_name=_('link from aparat'))
    
    class Meta:
        verbose_name = _('Link')
        verbose_name_plural = _('Links')

    def __str__(self) -> str:
        return self.link

def path_save_news(instance, filename):
    path_save = os.path.join('news', instance.title_en, filename)
    return path_save

class News(models.Model):
    title = models.CharField(max_length=500, verbose_name=_('title'), unique=True)
    image = models.ImageField(upload_to=path_save_news, verbose_name=_('image'))
    description = RichTextUploadingField(null=True, blank=True, verbose_name=_('description')) 
    date = models.DateField(auto_now_add=True)
    slug = models.CharField(default = uuid4(), max_length=500)
 
    class Meta:
        verbose_name = _('News')
        verbose_name_plural = _('News')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.title_fa
        elif lang == 'ar':
            return self.title_ar
        else:
            return self.title_en

    def get_absolute_url(self):
        return reverse('sanof:news', kwargs={"slug": self.slug_en})

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(News, self).delete()

    def m2j(self):
        return date2jalali(self.date)

    def save(self, *args, **kwargs):
        try:
            slti_en = self.title_en.replace(' ','-') 
            slti_fa = self.title_en.replace(' ','-') 
            slti_ar = self.title_en.replace(' ','-') 
            self.slug_en = slti_en
            self.slug_fa = slti_fa
            self.slug_ar = slti_ar
            this = News.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except: 
            pass

        super(News, self).save(*args, **kwargs)

def path_save_certificate(instance, filename):
    path_save = os.path.join('certificate', instance.title_en, filename)
    return path_save

class Certificates(models.Model):
    title = models.CharField(max_length=500, verbose_name=_('title'), unique=True)
    image = models.ImageField(upload_to=path_save_certificate, verbose_name=_('image'))
    date = models.DateField(verbose_name=_('date'))
    show = models.BooleanField(default=False, verbose_name=_('show in???'))
    slug = models.CharField(default = uuid4(), max_length=500)
   

    class Meta:
        verbose_name = _('Certificate')
        verbose_name_plural = _('Certificates')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.title_fa
        elif lang == 'ar':
            return self.title_ar
        else:
            return self.title_en

    def delete(self, *args, **kwargs):
        self.image.delete()
        self.logo.delete()
        super(Certificates, self).delete()

    def m2j(self):
        return date2jalali(self.date)

    def save(self, *args, **kwargs):
        try:
            slti_en = self.title_en.replace(' ','-') 
            slti_fa = self.title_fa.replace(' ','-') 
            slti_ar = self.title_ar.replace(' ','-') 
            self.slug_en = slti_en
            self.slug_fa = slti_fa
            self.slug_ar = slti_ar
            this = Certificates.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except: 
            pass

        super(Certificates, self).save(*args, **kwargs)

class Questions(models.Model):
    question = models.CharField(max_length=300, verbose_name=_('Question '), unique=True)
    answer = RichTextUploadingField(verbose_name=_('Answer ')

    class Meta:
        verbose_name = _('Frequently Asked Questions')
        verbose_name_plural = _('Frequently Asked Questions')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.question_fa
        elif lang == 'ar':
            return self.question_ar
        else:
            return self.question_en

def path_save_services(instance, filename):
    path_save = os.path.join('services', instance.title_en, filename)
    return path_save

class Services(models.Model):
    title = models.CharField(max_length=500, verbose_name=_('title'), unique=True)
    image = models.ImageField(upload_to=path_save_services, verbose_name=_('image'))
    description_en = RichTextUploadingField(null=True, blank=True, verbose_name=_('description ')) 
    slug = models.CharField(default = uuid4(), max_length=500)

    class Meta:
        verbose_name = _('Service')
        verbose_name_plural = _('Services')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.title_fa
        elif lang == 'ar':
            return self.title_ar
        else:
            return self.title_en

    def get_absolute_url(self):
        return reverse('sanof:service', kwargs={"slug": self.slug_en})

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Services, self).delete()

    def save(self, *args, **kwargs):
        try:
            slti_en = self.title_en.replace(' ','-') 
            slti_fa = self.title_fa.replace(' ','-') 
            slti_ar = self.title_ar.replace(' ','-') 
            self.slug_en = slti_en
            self.slug_fa = slti_fa
            self.slug_ar = slti_ar
            this = Services.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except: 
            pass

        super(Services, self).save(*args, **kwargs)

def path_save_slider(instance, filename):
    path_save = os.path.join('slider', instance.title_en, filename)
    return path_save

class Slider(models.Model):
    title = models.CharField(max_length=500, verbose_name=_('title'), unique=True)
    image = models.ImageField(upload_to=path_save_slider, verbose_name=_('image'))
    description = RichTextUploadingField(verbose_name=_('slider '))
    show = models.BooleanField(default=False, verbose_name=_('to be displayed??'))
    slug = models.CharField(default = uuid4(), max_length=500)
    date = models.DateField(verbose_name=_('date'))

    class Meta:
        verbose_name = _('Slider')
        verbose_name_plural = _('Sliders')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.title_fa
        elif lang == 'ar':
            return self.title_ar
        else:
            return self.title_en

    def get_absolute_url(self):
        return reverse('sanof:slider', kwargs={"slug": self.slug_en})

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Slider, self).delete()

    def save(self, *args, **kwargs):
        try:
            slti_en = self.title_en.replace(' ','-') 
            slti_fa = self.title_fa.replace(' ','-') 
            slti_ar = self.title_ar.replace(' ','-') 
            self.slug_en = slti_en
            self.slug_fa = slti_fa
            self.slug_ar = slti_ar
            this = Slider.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except: 
            pass

        super(Slider, self).save(*args, **kwargs)
    
    def m2j(self):
        return date2jalali(self.date)

def path_save_portfolio(instance, filename):
    path_save = os.path.join('portfolio', instance.title_en, filename)
    return path_save

class Portfolio(models.Model):
    title = models.CharField(max_length=500, verbose_name=_('title'), unique=True)
    date = models.DateField(verbose_name=_('date'))
    image = models.ImageField(upload_to=path_save_portfolio, verbose_name=_('avatar'))
    address = models.CharField(max_length=500,verbose_name=_('address'))
    description = RichTextUploadingField(null=True, blank=True, verbose_name=_('description')) 
    slug = models.CharField(default=uuid4(), max_length=500,unique=True)


    class Meta:
        verbose_name = _('Portfolio')
        verbose_name_plural = _('Portfolio')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.title_fa
        elif lang == 'ar':
            return self.title_ar
        else:
            return self.title_en

    def get_absolute_url(self):
        return reverse('sanof:portfolio', kwargs={"slug": self.slug_en})

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Portfolio, self).delete()

    def save(self, *args, **kwargs):
        try:
            slti_en = self.title_en.replace(' ','-')
            slti_fa = self.title_fa.replace(' ','-')
            slti_ar = self.title_ar.replace(' ','-')
            self.slug_en = slti_en
            self.slug_fa = slti_fa
            self.slug_ar = slti_ar
            this = Portfolio.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except: 
            pass

        super(Portfolio, self).save(*args, **kwargs)

    def m2j(self):
        return date2jalali(self.date)

def path_save_portfolios(instance, filename):
    base, extension = os.path.splitext(filename)
    path_save = os.path.join('portfolio', instance.portfolio.title_en, str(instance.id) + str(ext) )
    
    return path_save


class PortfolioImages(models.Model):
    portfolio = models.ForeignKey(Portfolio,on_delete=models.CASCADE, verbose_name=_('which portfolio'))
    image = models.ImageField(upload_to=path_save_portfolios, verbose_name=_('image'))

    class Meta:
        verbose_name = _('Portfolio images')
        verbose_name_plural = _('Portfolio images')

    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.portfolio.title_fa
        elif lang == 'ar':
            return self.portfolio.title_ar
        else:
            return self.portfolio.title_en

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(PortfolioImages, self).delete()

    def save(self, *args, **kwargs):
        try:
            this = PortfolioImages.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except: 
            pass

        super(PortfolioImages, self).save(*args, **kwargs)

class ContactUs(models.Model):
    name = models.CharField(max_length=300, verbose_name=_('your name'))
    email = models.EmailField(verbose_name=_('your email'))
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message=_("Phone number must be entered in the format: '+989010000000'. Up to 15 digits allowed."))
    phone = models.CharField(validators=[phone_regex], max_length=17, verbose_name=_("your phone number") ) 
    message = models.TextField(verbose_name=_('your message'))
    checked = models.BooleanField(default=False, null=True, blank=True, verbose_name=_('Reviewed??'))
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name = _('Contact Us')
        verbose_name_plural = _('Contact Us')
    def __str__(self) -> str:
        lang = translation.get_language()

        if lang == 'fa':
            return self.name_fa
        elif lang == 'ar':
            return self.name_ar
        else:
            return self.name_en

    def m2j(self):
        return date2jalali(self.date)

