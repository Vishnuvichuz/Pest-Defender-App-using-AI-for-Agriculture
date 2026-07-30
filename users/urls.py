from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, FarmViewSet

router = DefaultRouter()
router.register(r'accounts', UserViewSet, basename='user')
router.register(r'farms', FarmViewSet, basename='farm')

urlpatterns = [
    path('', include(router.urls)),
]
