from .common import GiveawaySerializer
from regions.serializsers.common import RegionSerializer
from categories.serializsers.common import CategorySerializer
from jwt_auth.serializers.common import UserSerializer
from comments.serializers.populated import PopulatedCommentSerializer


class PopulatedGiveawaySerializer(GiveawaySerializer):
    regions = RegionSerializer(many=True)
    category = CategorySerializer()
    owner = UserSerializer()
    # watchlist = UserSerializer(many=True)
    comments = PopulatedCommentSerializer(many=True)
