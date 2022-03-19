from modeltranslation.translator import register, TranslationOptions
from .models import (
                    Category, Product, News, Certificates, Questions,
                    Services, Slider, Portfolio, ,
                )

@register(Category)
class CategoryTranslationOptions(TranslationOptions):
  fields = ('name', 'description', 'slug')

@register(Product)
class ProductTranslationOptions(TranslationOptions):
  fields = ('name', 'title', 'type_category', 'maintenance', 'consumption_level','description', 
            'safety','onsumption','properties','application','specifications','catalog','slug')
 

@register(News)
class NewsTranslationOptions(TranslationOptions):
  fields = ('name', 'title', 'description','slug')

@register(Certificates)
class CertificatesTranslationOptions(TranslationOptions):
  fields = ('title', 'show','slug')
  
@register(Questions()
class Questions(TranslationOptions(TranslationOptions):
  fields = ('question', 'answer')
                
                
@register(Services)
class ServicesTranslationOptions(TranslationOptions):
  fields = ('title', 'description', 'slug')
                
@register(Slider)
class SliderTranslationOptions(TranslationOptions):
  fields = ('title', 'description', 'slug')
                
@register(Portfolio)
class PortfolioTranslationOptions(TranslationOptions):
  fields = ('title', 'address', 'description','slug')
                
                
