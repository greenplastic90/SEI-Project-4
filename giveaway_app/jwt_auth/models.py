
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField


# Create your models here.
class User(AbstractUser):
    username = models.CharField(max_length=50, unique=True)
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    profile_image = models.CharField(max_length=500, blank=True)
    following = models.ManyToManyField("self", blank=True)
    followers = models.ManyToManyField("self", blank=True)
    is_verified = models.BooleanField(default=False)
    bio = models.CharField(max_length=2000, blank=True)
    socials = ArrayField(models.CharField(
        max_length=500), null=True, blank=True)
    watchlist = models.ManyToManyField(
        "giveaways.Giveaway",
        related_name="jwt_auth",
        blank=True
    )
    region = models.ManyToManyField(
        "regions.Region",
        related_name="jwt_auth"
    )
