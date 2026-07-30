from rest_framework import serializers
from .models import Alert
from users.serializers import FarmSerializer

class AlertSerializer(serializers.ModelSerializer):
    farm_details = FarmSerializer(source='farm', read_only=True)
    
    class Meta:
        model = Alert
        fields = '__all__'
        read_only_fields = ['user', 'date_detected']
