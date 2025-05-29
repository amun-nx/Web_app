from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet
from .views import AppartmentViewSet
from .views import AppartmentDetailByProject
from django.urls import path

router = DefaultRouter()

# Register the viewsets with the router
# The url will be http://<your-domain>/api/projects/ for ProjectViewSet
router.register(r'projects', ProjectViewSet)

# The url will be http://<your-domain>/api/apartments/ for AppartmentViewSet
router.register(r'appartements', AppartmentViewSet, basename='appartements')

urlpatterns = router.urls +[
        path('projects/<int:project_id>/<int:appartment_id>/', AppartmentDetailByProject.as_view()),
]  