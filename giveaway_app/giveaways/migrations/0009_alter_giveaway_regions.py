# Generated by Django 4.0.3 on 2022-03-11 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('regions', '0002_alter_region_name'),
        ('giveaways', '0008_giveaway_watcher_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='giveaway',
            name='regions',
            field=models.ManyToManyField(default=1, related_name='giveaways', to='regions.region'),
        ),
    ]
