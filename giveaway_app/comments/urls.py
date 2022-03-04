from django.urls import path
from .views import CommentDetailView, CommentView

urlpatterns = [
    path('', CommentView.as_view()),
    path('<int:pk>/', CommentDetailView.as_view()),
]
