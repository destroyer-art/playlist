from django.conf import settings
from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=100, null=False)

    def __str__(self):
        return f"{self.name}"


class Genre(models.Model):
    name = models.CharField(max_length=100, null=False)

    def __str__(self):
        return f"{self.name}"


class Mood(models.Model):
    name = models.CharField(max_length=100, null=False)

    def __str__(self):
        return f"{self.name}"


class Track(models.Model):
    id = models.CharField(primary_key=True, max_length=10)
    title = models.CharField(max_length=200, null=False)
    genres = models.ManyToManyField(Genre, related_name="genre")
    moods = models.ManyToManyField(Mood, related_name="mood")
    main_artists = models.ManyToManyField(Artist, related_name="main_artist")
    featured_artists = models.ManyToManyField(Artist, related_name="featured_artist")
    length = models.IntegerField(default=0)
    bpm = models.IntegerField(default=0)

    @property
    def audio(self):
        return "{}{}.{}".format(settings.ASSETS_BASE, self.id, "mp3")

    @property
    def cover_art(self):
        return "{}{}.{}".format(settings.ASSETS_BASE, self.id, "jpg")

    @property
    def waveform(self):
        return "{}{}.{}".format(settings.ASSETS_BASE, self.id, "json")

    @property
    def spotify(self):
        return "{}{}/{}".format(settings.DSP_BASE, self.id, "spotify")
