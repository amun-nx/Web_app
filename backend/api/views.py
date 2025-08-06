# views.py
from rest_framework.viewsets import ModelViewSet
from .models import Project, Client, Situation
from .serializers import ProjectSerializer, ClientSerializer, SituationSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    def get_queryset(self):
        project_id = self.kwargs.get('project_pk')
        if project_id:
            return self.queryset.filter(project_id=project_id)
        return self.queryset

class SituationViewSet(ModelViewSet):
    queryset = Situation.objects.all()
    serializer_class = SituationSerializer

    def get_queryset(self):
        client_id = self.kwargs.get('client_pk')
        if client_id:
            return self.queryset.filter(client_id=client_id)
        return self.queryset