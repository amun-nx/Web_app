# views.py
from rest_framework.viewsets import ModelViewSet
from .models import Project, Client
from .serializers import ProjectSerializer, ClientSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ClientViewSet(ModelViewSet):
    serializer_class = ClientSerializer

    def get_queryset(self):
        # Filtrer clients par project_id passé dans l'URL nested router
        project_id = self.kwargs.get('project_pk')
        return Client.objects.filter(project_id=project_id)

    def perform_create(self, serializer):
        # Lors de la création, associer automatiquement le client au projet
        project_id = self.kwargs.get('project_pk')
        serializer.save(project_id=project_id)
