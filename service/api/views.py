from . import models
from django.core import serializers
from rest_framework import viewsets
from rest_framework import permissions
from . import serializers

class TrackViewSet(viewsets.ModelViewSet):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
