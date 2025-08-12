from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project
from .models import Client
from .models import Situation


class SituationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Situation
        fields = ['id', 'date', 'description']  # Include all necessary fields for the Situation model

# Serializer for the Appartment model
class ClientSerializer(serializers.ModelSerializer):
    situations = SituationSerializer(many=True, read_only=True)  # Use the SituationSerializer to serialize related Situations, many=True indicates that a Client can have multiple Situations, read_only=True means that these fields are not expected to be modified through this serializer

    class Meta:
        model = Client
        fields = ['id', 'client_name', 'nb_situation','situations']  # Include all necessary fields for the Client model, including related Situations

# Serializer for the Project model, including related Appartments
class ProjectSerializer(serializers.ModelSerializer):
    # Use the AppartmentSerializer to serialize related Appartments, many =True indicates that a Project can have multiple Appartments, 
    # read_only=True means that these fields are not expected to be modified through this serializer
    clients = ClientSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = "__all__"  # This will include all fields from the Project model, including the related Appartments
    
class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True) 

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']  # Include all necessary fields for the User model

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user