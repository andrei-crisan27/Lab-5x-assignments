from django.db import models
from django.core.exceptions import ValidationError


# creating validator functions
def validate_continent(value):
    continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Oceania']
    if value not in continents:
        raise ValidationError("This is an invalid continent!")
    else:
        return value


def validate_year_founded(value):
    if value < 0 or value > 2023:
        raise ValidationError("The company couldn't have been founded in that year!")
    else:
        return value


def validate_age(value):
    if value < 0 or value > 150:
        raise ValidationError("It is not possible for a human to have this age!")
    else:
        return value


# Create your models here.


class Countries(models.Model):
    name = models.CharField(max_length=25)
    continent = models.CharField(max_length=25, validators=[validate_continent])
    population = models.IntegerField()
    capital = models.CharField(max_length=25)
    surface = models.IntegerField()

    def __str__(self):
        return self.name


class Individuals(models.Model):
    firstname = models.CharField(max_length=25)
    lastname = models.CharField(max_length=25)
    nationality = models.CharField(max_length=20)
    age = models.IntegerField(validators=[validate_age])
    job = models.CharField(max_length=50)
    countries_visited = models.ManyToManyField(Countries, through='VisitedCountries')

    def __str__(self):
        return self.firstname


class Companies(models.Model):
    name = models.CharField(max_length=25)
    year_founded = models.IntegerField(validators=[validate_year_founded])
    number_of_employees = models.IntegerField()
    country = models.ForeignKey(Countries, on_delete=models.CASCADE)
    activity = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class VisitedCountries(models.Model):
    individual = models.ForeignKey(Individuals, on_delete=models.CASCADE)
    country = models.ForeignKey(Countries, on_delete=models.CASCADE)
    year = models.IntegerField()
    review = models.CharField(max_length=255)

    class Meta:
        unique_together = [['individual', 'country']]
