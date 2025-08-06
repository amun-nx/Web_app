from django.db import models

# Create your models here.

# Model of a Project
class Project(models.Model):
    project_name = models.CharField(max_length=100)
    nb_client = models.IntegerField(blank=True, null=True)
    

# Model of an Appartment, which is related to a Project
class Client(models.Model):
    client_name = models.CharField(max_length=100)
    nb_situation = models.IntegerField(blank=True, null=True)
    project = models.ForeignKey(Project, related_name='clients', on_delete=models.CASCADE, null=True, blank=True)

    # Additional fields for Appartment can be added here

# Add a statistic element 

class Situation(models.Model):
    date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    client = models.ForeignKey(Client, related_name='situations', on_delete=models.CASCADE,null=True, blank=True)
