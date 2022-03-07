from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.exceptions import NotFound
from .serializers.common import UserSerializer
from .serializers.populated import PopulatedUserSerializer
from datetime import datetime, timedelta
from django.db import IntegrityError
from django.conf import settings
import jwt

from rest_framework.permissions import IsAuthenticatedOrReadOnly

User = get_user_model()


class RegisterView(APIView):

    def post(self, request):
        print('Resquest --->', request.data)
        user_to_create = UserSerializer(data=request.data, partial=True)
        print('user_to_create --->', user_to_create)
        try:
            user_to_create.is_valid()
            user_to_create.save()
            return Response(user_to_create.data, status=status.HTTP_201_CREATED)
        except AssertionError as e:
            return Response({"detail": user_to_create.errors}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            print("There was an error")
            return Response("Failed to create user", status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):

    def post(self, request):
        print('Resquest --->', request.data)
        try:
            user_to_login = User.objects.get(email=request.data.get('email'))
        except AssertionError as e:
            print(str(e))
            return Response({"detail": user_to_login.errors}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except User.DoesNotExist:
            return PermissionDenied(detail='Unauthorized')

        if not user_to_login.check_password(request.data.get('password')):
            return PermissionDenied(detail='Unauthorized')

        dt = datetime.now() + timedelta(days=7)
        print('DT --->', int(dt.strftime('%s')))

        token = jwt.encode({
            'sub': user_to_login.id,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, 'HS256')
        print('TOKEN --->', token)

        return Response({'token': token, 'message': f"Welcome back {user_to_login.username}"},
                        status.HTTP_202_ACCEPTED)


class UserDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise NotFound(detail="User not found")

    def get(self, _request, pk):
        user = self.get_user(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        user = self.get_user(pk=pk)
        print('requestID ->', request)
        if request.user.id != user.id:
            raise PermissionDenied(detail='Unauthorized')
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        user_to_update = self.get_user(pk=pk)

        if request.user.id != user_to_update.id:
            raise PermissionDenied(detail='Unauthorized')

        serialized_user = UserSerializer(
            user_to_update, data=request.data, partial=True)

        print('DATA -->', request.data)
        try:
            serialized_user.is_valid()
            print('SDATA -->', serialized_user.is_valid())
            print('Here')
            serialized_user.save()
            return Response(serialized_user.data, status=status.HTTP_202_ACCEPTED)
        except AssertionError as e:
            print('E ---->', e)
            return Response({"detail": str(e)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response(
                "Unprocessable Entity",
                status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class RelatedUserDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise NotFound(detail="User not found")

    def put(self, request, pk):
        user_to_update = self.get_user(pk=pk)

        serialized_user = UserSerializer(
            user_to_update, data=request.data, partial=True)

        print('DATA -->', request.data)
        try:
            serialized_user.is_valid()
            print('SDATA -->', serialized_user.is_valid())
            print('Here')
            serialized_user.save()
            return Response(serialized_user.data, status=status.HTTP_202_ACCEPTED)
        except AssertionError as e:
            print('E ---->', e)
            return Response({"detail": str(e)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response(
                "Unprocessable Entity",
                status=status.HTTP_422_UNPROCESSABLE_ENTITY)
