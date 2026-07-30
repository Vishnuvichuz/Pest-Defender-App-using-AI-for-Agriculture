import random
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import PestCatalog, ScanHistory
from .serializers import PestCatalogSerializer, ScanHistorySerializer

class PestCatalogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PestCatalog.objects.all()
    serializer_class = PestCatalogSerializer
    permission_classes = [permissions.AllowAny]

class ScanHistoryViewSet(viewsets.ModelViewSet):
    serializer_class = ScanHistorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return ScanHistory.objects.filter(user=self.request.user).order_by('-scan_date')

    def perform_create(self, serializer):
        # MOCK AI IDENTIFICATION
        pests = list(PestCatalog.objects.all())
        identified = random.choice(pests) if pests else None
        confidence = round(random.uniform(70.0, 99.9), 2)
        serializer.save(user=self.request.user, pest_identified=identified, confidence_score=confidence)

    @action(detail=False, methods=['post'], permission_classes=[permissions.AllowAny])
    def scan_image(self, request):
        # Expects an image url payload from mobile. We may not have auth during initial prototype.
        image_url = request.data.get('image_url', '')
        pests = list(PestCatalog.objects.all())
        identified = random.choice(pests) if pests else None
        confidence = round(random.uniform(75.5, 99.9), 2)

        if request.user and request.user.is_authenticated:
            scan = ScanHistory.objects.create(
                user=request.user,
                image_url=image_url,
                pest_identified=identified,
                confidence_score=confidence
            )
            serializer = self.get_serializer(scan)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        # Anonymous fallback: return mock analysis payload for unauthenticated mobile users
        payload = {
            'image_url': image_url,
            'pest_identified': PestCatalogSerializer(identified).data if identified else None,
            'confidence_score': confidence,
            'anonymous': True,
        }
        return Response(payload, status=status.HTTP_200_OK)
