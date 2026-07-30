from django.db import models
from django.contrib.auth.models import User
from users.models import Farm

class NDVIVegIndex(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE)
    date_recorded = models.DateField(auto_now_add=True)
    index_value = models.DecimalField(max_digits=5, decimal_places=2) # 0 to 100

    def __str__(self):
        return f"NDVI for {self.farm.name} on {self.date_recorded}: {self.index_value}"

class TreatmentROI(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE)
    period_start = models.DateField()
    period_end = models.DateField()
    cost_labor = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    cost_treatments = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    cost_equipment = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    roi_percentage = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    def total_cost(self):
        return self.cost_labor + self.cost_treatments + self.cost_equipment
