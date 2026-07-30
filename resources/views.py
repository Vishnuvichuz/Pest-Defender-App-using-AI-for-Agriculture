from rest_framework import viewsets, permissions
from .models import Labourer, Equipment
from .serializers import LabourerSerializer, EquipmentSerializer

class LabourerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Labourer.objects.all()
    serializer_class = LabourerSerializer
    permission_classes = [permissions.AllowAny]

class EquipmentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer
    permission_classes = [permissions.AllowAny]
