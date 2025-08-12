# views.py

#| Classe           | Usage                             | Méthodes HTTP gérées          |
#| ---------------- | --------------------------------- | ----------------------------- |
#| `APIView`        | Personnaliser complètement        | Tu dois gérer tout            |
#| `GenericAPIView` | Base pour views génériques        | Pas de méthodes par défaut    |
#| `CreateAPIView`  | Endpoint POST pour créer un objet | POST uniquement               |
#| `ModelViewSet`   | CRUD complet sur un modèle        | GET, POST, PUT, PATCH, DELETE |

from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from .models import Project, Client, Situation
from .serializers import ProjectSerializer, ClientSerializer, SituationSerializer, UserSerializer
from django.contrib.auth.models import User

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
    
class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

