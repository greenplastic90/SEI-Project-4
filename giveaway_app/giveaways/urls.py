from django.urls import path
from .views import GiveawayListView, GiveawayDetailView, UpdateGiveAwayView

urlpatterns = [
    path('', GiveawayListView.as_view()),
    path('<int:pk>/', GiveawayDetailView.as_view()),
    path('update/<int:pk>/', UpdateGiveAwayView.as_view())
]
