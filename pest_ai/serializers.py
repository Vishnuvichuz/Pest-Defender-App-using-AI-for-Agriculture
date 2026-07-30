from rest_framework import serializers
from .models import PestCatalog, ScanHistory

class PestCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = PestCatalog
        fields = '__all__'

class ScanHistorySerializer(serializers.ModelSerializer):
    pest_details = PestCatalogSerializer(source='pest_identified', read_only=True)
    
    class Meta:
        model = ScanHistory
        fields = '__all__'
        read_only_fields = ['user', 'scan_date', 'pest_identified', 'confidence_score']
