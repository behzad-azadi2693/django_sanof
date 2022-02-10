from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SanofConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'sanof'
    verbose_name = _('SANOF')
    verbose_name_plural = _('SANOF')