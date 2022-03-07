from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from django.db import IntegrityError
from rest_framework.exceptions import PermissionDenied
from comments.serializers.common import CommentSerializer
from comments.serializers.populated import PopulatedCommentSerializer
from .models import Comment
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class CommentView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request):
        request.data["owner"] = request.user.id
        print(request.data)

        serialized_review = CommentSerializer(data=request.data)
        try:
            serialized_review.is_valid()
            serialized_review.save()
            print(serialized_review.data)
            return Response(serialized_review.data, status=status.HTTP_201_CREATED)
        except AssertionError as e:
            print(str(e))
            return Response({"detail": serialized_review.errors}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response({
                "detail": "Unprocessable Entity"
            }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class CommentDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_comment(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound(detail="comment not found")

    def get(self, _request, pk):
        comment = self.get_comment(pk)
        serialized_comment = PopulatedCommentSerializer(comment)
        return Response(serialized_comment.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        print('USER ------>', request.user.id)
        try:
            comment_to_delete = Comment.objects.get(pk=pk)

            if comment_to_delete.owner != request.user and not request.user.is_superuser:
                raise PermissionDenied(detail="Unauthorised")

            comment_to_delete.delete()

            return Response(status=status.HTTP_204_NO_CONTENT)
        except Comment.DoesNotExist:
            raise NotFound(detail="Review not found")
        except:
            return Response({
                "detail": "Failed to delete Review"
            }, status=status.HTTP_401_UNAUTHORIZED)

    def put(self, request, pk):
        comment_to_update = self.get_comment(pk=pk)
        if comment_to_update.owner != request.user and not request.user.is_superuser:
            raise PermissionDenied(detail="Unauthorised")
        serialized_comment = CommentSerializer(
            comment_to_update, data=request.data, partial=True)
        try:
            serialized_comment.is_valid()
            serialized_comment.save()
            return Response(serialized_comment.data, status=status.HTTP_202_ACCEPTED)
        except AssertionError as e:
            return Response({"detail": str(e)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response("Unprocessable Entity", status=status.HTTP_422_UNPROCESSABLE_ENTITY)
