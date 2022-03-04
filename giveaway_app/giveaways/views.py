from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from django.db import IntegrityError

from giveaways.serializers.common import GiveawaySerializer

from .models import Giveaway
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class GiveawayListView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        giveaways = Giveaway.objects.all()
        serialized_giveaways = GiveawaySerializer(giveaways, many=True)
        return Response(serialized_giveaways.data, status=status.HTTP_200_OK)

    def post(self, request):
        serialized_data = GiveawaySerializer(data=request.data)
        try:
            serialized_data.is_valid()
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_201_CREATED)
        except IntegrityError as e:
            return Response({"detail": str(e)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except AssertionError as e:
            return Response({"detail": str(e)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response(
                {"detail": "Unprocessable Entity"},
                status=status.HTTP_422_UNPROCESSABLE_ENTITY
            )


# class GiveawyDetailView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
