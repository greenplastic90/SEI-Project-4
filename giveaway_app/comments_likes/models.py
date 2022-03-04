from django.db import models

# Create your models here.


# class LikeOrDislike(models.Model):
#     owner = models.ForeignKey(
#         "jwt_auth.User",
#         related_name="like_or_dislike",
#         on_delete=models.CASCADE,
#         blank=True
#     )
#     comment_id = models.ForeignKey(
#         "giveaways.Giveaway",
#         related_name="commented",
#         on_delete=models.CASCADE,
#         blank=True
#     )
#     like_status = models.BooleanField(default=True)  # ? Or default = None ?
