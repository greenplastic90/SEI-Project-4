# Generated by Django 4.0.3 on 2022-03-09 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('giveaways', '0007_remove_giveaway_watchlist'),
        ('jwt_auth', '0004_alter_user_watchlist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='watchlist',
            field=models.ManyToManyField(blank=True, related_name='Watchers', to='giveaways.giveaway'),
        ),
    ]