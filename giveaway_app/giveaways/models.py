from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Giveaway(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=2000)
    giveaway_link = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()
    winner = models.CharField(max_length=100, blank=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="giveaways",
        on_delete=models.DO_NOTHING,
        blank=True
    )
    category = models.ForeignKey(
        "categories.Category",
        related_name="giveaways",
        on_delete=models.DO_NOTHING
    )
    giveaway_images = ArrayField(models.CharField(
        max_length=500), size=3, null=True, blank=True)
    watcher_list = models.ManyToManyField(
        "jwt_auth.User",
        related_name="giveaway",
        blank=True
    )
    regions = models.ManyToManyField(
        "regions.Region",
        related_name="giveaways"
    )

    def __str__(self):
        return f"{self.name} made by {self.owner}"
