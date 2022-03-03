from .common import UserSerializer
from giveaways.serializers.common import GiveawaySerializer

class PopulatedUserSerializer(UserSerializer):
    followers = UserSerializer(many=True)
    following = UserSerializer(many=True)
    giveaways = GiveawaySerializer(many=True)
