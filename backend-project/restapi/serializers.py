from rest_framework import serializers

from .models import Individuals, Companies, Countries, VisitedCountries


class IndividualsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Individuals
        fields = ('__all__')
        depth = 1


class IndividualsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Individuals
        fields = ['id', 'firstname', 'lastname', 'nationality', 'age', 'job']


class IndividualsVisitedSerializer(serializers.ModelSerializer):
    avg_population = serializers.FloatField()

    class Meta:
        model = Individuals
        fields = ['id', 'firstname', 'lastname', 'nationality', 'age', 'job', 'countries_visited',
                  'avg_population']
        depth = 1


class CompaniesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companies
        fields = ('__all__')


class CountriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Countries
        fields = ('__all__')


class CountriesStatisticsSerializer(serializers.ModelSerializer):
    visitors_age = serializers.FloatField()

    class Meta:
        model = Countries
        fields = ['id', 'name', 'continent', 'population', 'capital', 'surface', 'visitors_age']
        depth = 1


class VisitedCountriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitedCountries
        fields = ('__all__')
        depth = 0


class CountriesKeySerializer(serializers.ModelSerializer):
    companies = CompaniesSerializer(many=True, read_only=True)
    individuals = IndividualsListSerializer(many=True, read_only=True)

    class Meta:
        model = Countries
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['companies'] = CompaniesSerializer(instance.companies_set.all(), many=True).data
        representation['visitors'] = IndividualsListSerializer(instance.individuals_set.all(), many=True).data
        return representation


class CompaniesKeySerializer(serializers.ModelSerializer):
    country = CountriesSerializer(read_only=True)

    class Meta:
        model = Companies
        fields = '__all__'
