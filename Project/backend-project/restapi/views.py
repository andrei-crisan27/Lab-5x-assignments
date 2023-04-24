from django.db.models import Avg, Sum
from rest_framework import generics
from .models import Individuals, Companies, Countries, VisitedCountries
from .serializers import IndividualsSerializer, CompaniesSerializer, CountriesSerializer, CountriesKeySerializer, \
    CompaniesKeySerializer, VisitedCountriesSerializer, IndividualsVisitedSerializer, IndividualsListSerializer, \
    CountriesStatisticsSerializer


class IndividualsList(generics.ListCreateAPIView):
    serializer_class = IndividualsListSerializer
    queryset = Individuals.objects.all()


class IndividualsDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = IndividualsSerializer
    queryset = Individuals.objects.all()


class CompaniesList(generics.ListCreateAPIView):
    serializer_class = CompaniesSerializer

    def get_queryset(self):
        queryset = Companies.objects.all()
        year = self.request.query_params.get('year')
        if year is not None:
            queryset = queryset.filter(year_founded__gte=year)
        return queryset


class CompaniesDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CompaniesKeySerializer
    queryset = Companies.objects.all()


class CountriesList(generics.ListCreateAPIView):
    serializer_class = CountriesSerializer
    queryset = Countries.objects.all()


class CountriesDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CountriesKeySerializer
    queryset = Countries.objects.all()


class VisitedCountriesList(generics.ListCreateAPIView):
    serializer_class = VisitedCountriesSerializer
    queryset = VisitedCountries.objects.all()


class VisitedCountriesDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = VisitedCountriesSerializer
    queryset = VisitedCountries.objects.all()


class IndividualsByAvgCountryPopulation(generics.ListAPIView):
    serializer_class = IndividualsVisitedSerializer

    def get_queryset(self):
        queryset = Individuals.objects \
            .annotate(avg_population=Avg('visitedcountries__country__population')).order_by('avg_population')
        return queryset


class CountriesByTotalAgeOfVisitors(generics.ListAPIView):
    serializer_class = CountriesStatisticsSerializer

    def get_queryset(self):
        queryset = Countries.objects.annotate(visitors_age=Sum('visitedcountries__individual__age')).order_by(
            '-visitors_age')
        return queryset
