from __future__ import unicode_literals

from django.db import models


# Create your models here.
class SimpleStat(models.Model):
    title = models.CharField(max_length=200, db_index=True)
    value = models.IntegerField()
    update_time = models.DateTimeField(db_index=True, auto_now_add=True)
