from django.db import models
from django.contrib.auth.models import User

class PestCatalog(models.Model):
    name = models.CharField(max_length=100) # e.g. Brown Plant Hopper, Aphids
    key_info = models.TextField()
    host_plants = models.CharField(max_length=255)
    treatment_guide = models.TextField()
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class ScanHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scans')
    image_url = models.URLField(blank=True, null=True) # normally would use ImageField, but using URL for simplicity
    pest_identified = models.ForeignKey(PestCatalog, on_delete=models.SET_NULL, null=True, blank=True)
    confidence_score = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    scan_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Scan by {self.user.username} on {self.scan_date.strftime('%Y-%m-%d')}"
