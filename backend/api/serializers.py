from rest_framework import serializers
from .models import Project
from .models import Appartment


# Serializer for the Appartment model
class AppartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appartment
        fields = ['id', 'appartement_name', 'project'] 

# Serializer for the Project model, including related Appartments
class ProjectSerializer(serializers.ModelSerializer):
    # Use the AppartmentSerializer to serialize related Appartments, many =True indicates that a Project can have multiple Appartments, 
    # read_only=True means that these fields are not expected to be modified through this serializer
    appartements = AppartmentSerializer(many=True, read_only=True)  # Assuming you want to include related Appartments

    class Meta:
        model = Project
        fields = "__all__"  # This will include all fields from the Project model, including the related Appartments