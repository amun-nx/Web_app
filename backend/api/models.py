from django.db import models

# Create your models here.

# Model of a Project
class Project(models.Model):
    project_name = models.CharField(max_length=100)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    nb_appartements = models.IntegerField(blank=True, null=True)
    adress = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    postal_code = models.CharField(max_length=20, blank=True, null=True)
    

# Model of an Appartment, which is related to a Project
class Appartment(models.Model):
    appartement_name = models.CharField(max_length=100)

    # ForeignKey to link Appartment to Project, on delete means that if a Project is deleted, all related Appartments will also be deleted
    # It is the integer ID of the Project that is stored in the Appartment model
    project = models.ForeignKey(Project, related_name='appartements', on_delete=models.CASCADE)

    # Additional fields for Appartment can be added here

# Add a statistic element 
