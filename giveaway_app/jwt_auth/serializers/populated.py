from .common import UserSerializer


class PopulatedUserSerializer(UserSerializer):
    followers = UserSerializer(many=True)
    following = UserSerializer(many=True)
