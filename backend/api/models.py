from django.db import models

# Create your models here.

# Model of a Project
class Project(models.Model):
    project_name = models.CharField(max_length=100)
    nb_client = models.IntegerField(blank=True, null=True)

    

# Model of an Appartment, which is related to a Project
class Client(models.Model):
    client_name = models.CharField(max_length=100)

    # ForeignKey to link Appartment to Project, on delete means that if a Project is deleted, all related Appartments will also be deleted
    # It is the integer ID of the Project that is stored in the Appartment model
    project = models.ForeignKey(Project, related_name='clients', on_delete=models.CASCADE)

    # Additional fields for Appartment can be added here

# Add a statistic element 
