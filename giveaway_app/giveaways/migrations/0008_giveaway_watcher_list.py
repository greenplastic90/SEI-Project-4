# Generated by Django 4.0.3 on 2022-03-09 15:57

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('giveaways', '0007_remove_giveaway_watchlist'),
    ]

    operations = [
        migrations.AddField(
            model_name='giveaway',
            name='watcher_list',
            field=models.ManyToManyField(blank=True, related_name='giveaway', to=settings.AUTH_USER_MODEL),
        ),
    ]
