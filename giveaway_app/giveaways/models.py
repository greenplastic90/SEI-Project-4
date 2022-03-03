from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Giveaway(models.Model):
    name = models.CharField(max_length=100, default=None)
    description = models.CharField(max_length=2000, default=None)
    giveaway_link = models.CharField(max_length=500, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(default=None)
    winner = models.CharField(max_length=100, blank=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="giveaways",
        on_delete=models.CASCADE,
    )
    # category = models.ForeignKey(
    #     "categories.Category",
    #     related_name="giveaways",
    #     on_delete=models.CASCADE,
    # )
    giveaway_images = ArrayField(models.CharField(
        max_length=500), size=3, null=True, blank=True)
    # watcher_list = models.ManyToManyField(
    #     "jwt_auth.User",
    #     related_name = "giveaways"
    # )
    # region = models.ManyToManyField(
    #     "regions.Region",
    #     related_name = "giveaways"
    # )

    def __str__(self):
        return f"{self.name} made by {self.owner}"
