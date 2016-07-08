from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Title(models.Model):
    name = models.CharField(max_length=255)
    cur = models.PositiveIntegerField(default=0)


class Data(models.Model):
    title = models.ForeignKey(Title)
    content = models.TextField(max_length=10240, default="{}")
    file = models.FileField(upload_to='upload')
    is_file = models.NullBooleanField(null=False)
