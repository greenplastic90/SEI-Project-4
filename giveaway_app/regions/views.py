from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from regions.serializsers.common import RegionSerializer
from .models import Region
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class RegionListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        regions = Region.objects.all()
        serialized_regions = RegionSerializer(
            regions, many=True)
        return Response(serialized_regions.data, status=status.HTTP_200_OK)

    def post(self, request):
        serialized_data = RegionSerializer(data=request.data)
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
