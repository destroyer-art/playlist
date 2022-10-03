from rest_framework import permissions, viewsets

from . import models, serializers


class TrackViewSet(viewsets.ModelViewSet):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PlaylistViewSet(viewsets.ModelViewSet):

    queryset = models.Playlist.objects.all()
    serializer_class = serializers.PlaylistSerializer
    