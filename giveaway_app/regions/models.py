from django.db import models

# Create your models here.
class Region(models.Model):
    name = models.CharField(max_length=50, default=None)

    def __str__(self):
        return f"{self.name}"