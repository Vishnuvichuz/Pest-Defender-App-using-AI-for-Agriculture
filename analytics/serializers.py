from rest_framework import serializers
from .models import NDVIVegIndex, TreatmentROI
from users.serializers import FarmSerializer

class NDVIVegIndexSerializer(serializers.ModelSerializer):
    farm_details = FarmSerializer(source='farm', read_only=True)
    
    class Meta:
        model = NDVIVegIndex
        fields = '__all__'

class TreatmentROISerializer(serializers.ModelSerializer):
    farm_details = FarmSerializer(source='farm', read_only=True)
    total_cost = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = TreatmentROI
        fields = '__all__'
