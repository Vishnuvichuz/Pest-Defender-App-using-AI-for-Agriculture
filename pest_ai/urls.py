from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PestCatalogViewSet, ScanHistoryViewSet

router = DefaultRouter()
router.register(r'catalog', PestCatalogViewSet)
router.register(r'history', ScanHistoryViewSet, basename='scan')

urlpatterns = [
    path('', include(router.urls)),
]
