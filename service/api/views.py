import json
from rest_framework import permissions, viewsets, generics
from rest_framework.response import Response

from . import models, serializers


class TrackViewSet(viewsets.ModelViewSet):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = models.Playlist.objects.all()
    serializer_class = serializers.PlaylistSerializer

    def create(self, request):
        if request.method == 'POST':
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            models.Playlist.create_playlist(self, body)
            return Response({"r":body}, status=200)
    
