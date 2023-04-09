from django.contrib import admin
from .models import Individuals, Countries, Companies, VisitedCountries
# Register your models here.

admin.site.register(Individuals)
admin.site.register(Countries)
admin.site.register(Companies)
admin.site.register(VisitedCountries)

