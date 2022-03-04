from django.db import models

# Create your models here.


class Comment(models.Model):
    text = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="comment",
        on_delete=models.CASCADE,

    )
    giveaway = models.ForeignKey(
        "giveaways.Giveaway",
        related_name="comments",
        on_delete=models.CASCADE
    )
    # is_reply = models.BooleanField(blank=True, default=False)
    # replied_to_comment_id = models.ForeignKey(
    #     "self", blank=True, on_delete=models.CASCADE, default="0")
    likes = models.ManyToManyField(
        "jwt_auth.User",
        related_name="likes",
        blank=True
    )

    def __str__(self):
        return f"{self.id} - {self.giveaway} - {self.text}"
