# Generated by Django 4.0.3 on 2022-03-04 17:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0005_alter_comment_replied_to_comment_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='is_reply',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='replied_to_comment_id',
        ),
    ]