from django.test import TestCase
from .models import Employer, Job

class EmployerModelTests(TestCase):
    def test_string_representation(self):
        employer = Employer(name='Test Employer')
        self.assertEqual(str(employer), employer.name)

class JobModelTests(TestCase):
    def test_string_representation(self):
        job = Job(title='Software Engineer')
        self.assertEqual(str(job), job.title)
