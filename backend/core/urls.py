from django.urls import path, include
from core.views import DashboardView

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),
    path('dashboard/', DashboardView.as_view(), name="dashboard")
]