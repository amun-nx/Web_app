from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Project
from .models import Appartment
from .serializers import ProjectSerializer
from .serializers import AppartmentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
# views.py


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class AppartmentViewSet(ModelViewSet):
    queryset = Appartment.objects.all()
    serializer_class = AppartmentSerializer

## Custom view to get Appartment details by Project ID
class AppartmentDetailByProject(APIView):
    # GET method to retrieve an Appartment by its ID within a specific Project
    def get(self, request, project_id, appartment_id):
        try:
            appartment = Appartment.objects.get(id=appartment_id, project_id=project_id)
        except Appartment.DoesNotExist:
            return Response({"error": "Appartment not found in this project."}, status=status.HTTP_404_NOT_FOUND)

        serializer = AppartmentSerializer(appartment)
        return Response(serializer.data)
    
    # PATCH method to update an Appartment by its ID within a specific Project
    def patch(self, request, project_id, appartment_id):
        try:
            appartment = Appartment.objects.get(id=appartment_id, project_id=project_id)
        except Appartment.DoesNotExist:
            return Response({"error": "Appartment not found in this project."}, status=status.HTTP_404_NOT_FOUND)

        serializer = AppartmentSerializer(appartment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE method to delete an Appartment by its ID within a specific Project
    def delete(self, request, project_id, appartment_id):
        try:
            appartment = Appartment.objects.get(id=appartment_id, project_id=project_id)
        except Appartment.DoesNotExist:
            return Response({"error": "Appartment not found in this project."}, status=status.HTTP_404_NOT_FOUND)

        appartment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
