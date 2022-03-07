from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from django.db import IntegrityError
from rest_framework.exceptions import PermissionDenied
from giveaways.serializers.common import GiveawaySerializer
from giveaways.serializers.populated import PopulatedGiveawaySerializer
from .models import Giveaway
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class GiveawayListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        giveaways = Giveaway.objects.all()
        serialized_giveaways = PopulatedGiveawaySerializer(
            giveaways, many=True)
        return Response(serialized_giveaways.data, status=status.HTTP_200_OK)

    def post(self, request):
        # For Some reasone the populated serilaizer is not createing a valid body/request to save()
        serialized_data = GiveawaySerializer(data=request.data)
        try:
            serialized_data.is_valid()
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_201_CREATED)
        except IntegrityError as e:
            return Response({"detail": str(e)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except AssertionError as e:
            return Response({"detail": serialized_data.errors}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response(
                {"detail": "Unprocessable Entity"},
                status=status.HTTP_422_UNPROCESSABLE_ENTITY
            )


class GiveawayDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_giveaway(self, pk):
        try:
            return Giveaway.objects.get(pk=pk)
        except Giveaway.DoesNotExist:
            raise NotFound(detail="giveaway not found")

    def get(self, _request, pk):
        giveaway = self.get_giveaway(pk)
        serialized_giveaway = PopulatedGiveawaySerializer(giveaway)
        return Response(serialized_giveaway.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        giveaway = self.get_giveaway(pk=pk)
        if request.user.id != giveaway.owner.id and not request.user.is_superuser:
            raise PermissionDenied(detail='Unauthorized')
        giveaway.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        giveaway_to_update = self.get_giveaway(pk=pk)
        if request.user.id != giveaway_to_update.owner.id:
            raise PermissionDenied(detail='Unauthorized')
        serialized_giveaway = GiveawaySerializer(
            giveaway_to_update, data=request.data, partial=True)
        try:
            serialized_giveaway.is_valid()
            serialized_giveaway.save()
            return Response(serialized_giveaway.data, status=status.HTTP_202_ACCEPTED)
        except AssertionError as e:
            return Response({"detail": serialized_giveaway.errors}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response("Unprocessable Entity", status=status.HTTP_422_UNPROCESSABLE_ENTITY)
