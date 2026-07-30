from rest_framework import serializers
from .models import Labourer, Equipment

class LabourerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Labourer
        fields = '__all__'

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'
