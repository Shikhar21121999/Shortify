from django.urls import path
from .views import SummaryGroupView

urlpatterns = [
    path('summary/', SummaryGroupView.as_view(), name='summary')
]
