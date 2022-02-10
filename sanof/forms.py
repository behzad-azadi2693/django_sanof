from django import forms
from django.db.models import fields
from .models import ContactUs
from django.utils.translation import gettext_lazy as _

messages = {
    'required':_('This field is required'),
    'invalid':_('This field is incorrect'),
    'max_length':_('Field size larger than allowed'),
    'min_length':_('Field size less than allowed'),
}

class ContactForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].widget.attrs['class']='ClientDataFormTextBox col-lg-10 col-md-10 col-sm-11 col-xs-12'
            self.fields['message'].widget.attrs['class']='ClientDataFormTextArea col-lg-12 col-md-12 col-sm-12 col-xs-12'
            self.fields['phone'].widget.attrs['style']='direction:ltr'


    class Meta:
        model = ContactUs
        fields = ('name','phone','email', 'message')