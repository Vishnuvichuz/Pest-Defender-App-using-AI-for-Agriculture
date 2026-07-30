from django.db import models
from django.contrib.auth.models import User
from users.models import Farm

class Alert(models.Model):
    SEVERITY_CHOICES = (
        ('Low', 'Low'),
        ('Moderate', 'Moderate'),
        ('High', 'High'),
        ('Critical', 'Critical'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='alerts')
    farm = models.ForeignKey(Farm, on_delete=models.SET_NULL, null=True, blank=True, related_name='alerts')
    pest_type = models.CharField(max_length=100)
    location = models.CharField(max_length=255) # e.g., 'Sector 3 - Rice field'
    date_detected = models.DateTimeField(auto_now_add=True)
    severity = models.CharField(max_length=20, choices=SEVERITY_CHOICES)
    action_required = models.TextField(blank=True, null=True)
    is_cleared = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.pest_type} at {self.location}"
