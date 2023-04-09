from rest_framework.test import APITestCase
from restapi.models import Individuals, Countries


class StatisticsTest(APITestCase):

    @classmethod
    def setUpTestData(cls):
        for i in range(1, 4):
            Countries.objects.create(name=f"c{i}", continent="c", population=i*i*i, capital="c", surface=1)
            Individuals.objects.create(firstname=f"f{i}", lastname="l", nationality="ro", age=10, job="j")
            for j in range(1, i + 1):
                country = Countries.objects.get(name=f"c{j}")
                individual = Individuals.objects.get(firstname=f"f{i}")
                individual.countries_visited.add(country, through_defaults={'year': 2020, 'review': "good"})

    def test_correct_result(self):
        response = self.client.get("/restapi/visited/sort-by-population/")
        self.assertEqual(len(response.data), 3)
        self.assertEqual((response.data[0]['avg_population']), 1)
        self.assertEqual((response.data[1]['avg_population']), 4.5)
        self.assertEqual((response.data[2]['avg_population']), 12)


