from rest_framework.test import APITestCase
from restapi.models import Companies, Countries


class FilterTest(APITestCase):

    @classmethod
    def setUpTestData(cls):
        companies = 10
        Countries.objects.create(name="c", continent="c", population=1, capital="c", surface=1)
        country = Countries.objects.get(name="c")
        for c_id in range(companies):
            Companies.objects.create(name=f"c {c_id}", year_founded=1950 + c_id, number_of_employees=10, country=country,
                                    activity="a")

    def test_correct_result(self):
        response = self.client.get("/restapi/companies/?year=1950")
        self.assertEqual(len(response.data), 10)
        response1 = self.client.get("/restapi/companies/?year=1955")
        self.assertEqual(len(response1.data), 5)
        response2 = self.client.get("/restapi/companies/?year=1960")
        self.assertEqual(len(response2.data), 0)
