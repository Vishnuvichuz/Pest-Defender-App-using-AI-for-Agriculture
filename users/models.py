from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    place = models.CharField(max_length=255, blank=True)
    address = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"

class Farm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='farms')
    name = models.CharField(max_length=100) # e.g., Rice, Coconut, Mango
    status = models.CharField(max_length=50, default='Healthy') # e.g., Healthy, Alert, Warning
    
    def __str__(self):
        return f"{self.name} - {self.user.username}"
