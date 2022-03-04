# Generated by Django 4.0.3 on 2022-03-04 11:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('regions', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('giveaways', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='giveaway',
            name='owner',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='giveaways', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='giveaway',
            name='region',
            field=models.ManyToManyField(related_name='giveaways', to='regions.region'),
        ),
    ]
