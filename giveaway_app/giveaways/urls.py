from django.urls import path
from .views import GiveawayListView, GiveawayDetailView

urlpatterns = [
    path('', GiveawayListView.as_view()),
    path('<int:pk>/', GiveawayDetailView.as_view())
]
