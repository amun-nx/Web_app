# urls.py
from django.urls import path, include
from rest_framework_nested import routers
from .views import ProjectViewSet, ClientViewSet, SituationViewSet

# Router racine
router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'clients', ClientViewSet, basename='clients')
router.register(r'situations', SituationViewSet, basename='situations')

# Nested: /projects/<project_pk>/clients/
projects_router = routers.NestedDefaultRouter(router, r'projects', lookup='project')
projects_router.register(r'clients', ClientViewSet, basename='project-clients')

# Nested: /projects/<project_pk>/clients/<client_pk>/situations/
clients_router = routers.NestedDefaultRouter(projects_router, r'clients', lookup='client')
clients_router.register(r'situations', SituationViewSet, basename='client-situations')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(projects_router.urls)),
    path('', include(clients_router.urls)),
]
