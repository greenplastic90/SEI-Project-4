from rest_framework import serializers 
from ..models import Giveaway

class GiveawaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Giveaway 
        fields = '__all__'