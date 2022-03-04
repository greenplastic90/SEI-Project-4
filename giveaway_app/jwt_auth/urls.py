
from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, RelatedUserDetailView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('<int:pk>/', UserDetailView.as_view()),
    path('related/<int:pk>/', RelatedUserDetailView.as_view())
]
