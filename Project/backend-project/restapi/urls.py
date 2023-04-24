from django.urls import path

from . import views
from .views import IndividualsList, IndividualsDetail, CountriesList, CountriesDetail, CompaniesList, CompaniesDetail, \
    VisitedCountriesList, VisitedCountriesDetail, IndividualsByAvgCountryPopulation, CountriesByTotalAgeOfVisitors


urlpatterns = [
    path('individuals/', IndividualsList.as_view()),
    path('individuals/<int:pk>/', IndividualsDetail.as_view()),
    path('countries/', CountriesList.as_view()),
    path('countries/<int:pk>/', CountriesDetail.as_view()),
    path('companies/', CompaniesList.as_view()),
    path('companies/<int:pk>/', CompaniesDetail.as_view()),
    path('visited/', VisitedCountriesList.as_view()),
    path('visited/<int:pk>/', VisitedCountriesDetail.as_view()),
    path('visited/sort-by-population/', IndividualsByAvgCountryPopulation.as_view()),
    path('visited/sort-by-total-age/', CountriesByTotalAgeOfVisitors.as_view()),
]
