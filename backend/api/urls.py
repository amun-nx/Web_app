from rest_framework_nested import routers
from django.urls import path, include
from .views import ProjectViewSet, ClientViewSet

router = routers.SimpleRouter()
router.register(r'projects', ProjectViewSet)

projects_router = routers.NestedSimpleRouter(router, r'projects', lookup='project')
projects_router.register(r'clients', ClientViewSet, basename='project-clients')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(projects_router.urls)),
]
