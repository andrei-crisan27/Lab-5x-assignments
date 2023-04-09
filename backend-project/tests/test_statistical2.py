from rest_framework.test import APITestCase
from restapi.models import Individuals, Countries


class StatisticsTest(APITestCase):

    @classmethod
    def setUpTestData(cls):
        for i in range(1, 4):
            Countries.objects.create(name=f"c{i}", continent="c", population=10, capital="c", surface=1)
            Individuals.objects.create(firstname=f"f{i}", lastname="l", nationality="ro", age=(i+1)*i*i, job="j")
            for j in range(1, i + 1):
                country = Countries.objects.get(name=f"c{j}")
                individual = Individuals.objects.get(firstname=f"f{i}")
                individual.countries_visited.add(country, through_defaults={'year': 2020, 'review': "good"})

    def test_correct_result(self):
        response = self.client.get("/restapi/visited/sort-by-total-age/")
        self.assertEqual(len(response.data), 3)
        self.assertEqual((response.data[0]['visitors_age']), 50)
        self.assertEqual((response.data[1]['visitors_age']), 48)
        self.assertEqual((response.data[2]['visitors_age']), 36)


