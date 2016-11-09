# -*- coding:utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.db.models import Model


class Path(Model):
    title = models.CharField(max_length=1024, db_index=True)
    cate = models.IntegerField(db_index=True, default=0)
    update_time = models.DateTimeField(db_index=True, auto_now_add=True)


class Position(Model):
    title = models.CharField(max_length=1024, db_index=True, default='$道路节点$')
    longitude = models.FloatField()
    latitude = models.FloatField()
    path = models.ForeignKey(Path, db_index=True, null=True)
    update_time = models.DateTimeField(db_index=True, auto_now_add=True)


class Cache(Model):
    key = models.CharField(max_length=255, db_index=True, unique=True)
    value = models.CharField(max_length=1024, default='', null=True)
    status = models.IntegerField(default=0)
    no_cache = models.BooleanField(default=False)
