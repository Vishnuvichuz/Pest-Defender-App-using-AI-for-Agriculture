from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NDVIVegIndexViewSet, TreatmentROIViewSet

router = DefaultRouter()
router.register(r'ndvi', NDVIVegIndexViewSet, basename='ndvi')
router.register(r'roi', TreatmentROIViewSet, basename='roi')

urlpatterns = [
    path('', include(router.urls)),
]
