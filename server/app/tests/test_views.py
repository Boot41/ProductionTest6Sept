from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Employer, Job

class JobViewSetTests(APITestCase):
    def setUp(self):
        self.employer = Employer.objects.create(name='Test Employer', email='employer@test.com')
        self.client.force_authenticate(user=self.employer)  # Authenticate the user

    def test_create_job(self):
        url = reverse('job-list')
        data = {'title': 'Software Engineer', 'description': 'Job Description Here'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Job.objects.count(), 1)
        self.assertEqual(Job.objects.get().title, 'Software Engineer')

    def test_view_jobs(self):
        Job.objects.create(employer=self.employer, title='Software Engineer', description='Job Description Here')
        url = reverse('job-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
