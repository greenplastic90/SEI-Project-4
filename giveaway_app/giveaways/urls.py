from django.urls import path
from .views import GiveawayListView

urlpatterns = [
    path('', GiveawayListView.as_view())
]
