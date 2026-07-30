from django.db import models

class Labourer(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    image_url = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.name

class Equipment(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    daily_rate = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.name
