from rest_framework import viewsets, permissions
from .models import NDVIVegIndex, TreatmentROI
from .serializers import NDVIVegIndexSerializer, TreatmentROISerializer

class NDVIVegIndexViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = NDVIVegIndexSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return NDVIVegIndex.objects.filter(user=self.request.user).order_by('-date_recorded')

class TreatmentROIViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = TreatmentROISerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return TreatmentROI.objects.filter(user=self.request.user).order_by('-period_start')
