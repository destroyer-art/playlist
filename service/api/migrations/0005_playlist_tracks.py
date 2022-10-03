# Generated by Django 4.0.6 on 2022-10-03 11:15

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_playlisttrack'),
    ]

    operations = [
        migrations.AddField(
            model_name='playlist',
            name='tracks',
            field=models.ForeignKey(default=django.utils.timezone.now, on_delete=django.db.models.deletion.CASCADE, to='api.track'),
            preserve_default=False,
        ),
    ]