#!/usr/bin/env python
# -*- coding:utf-8 -*-
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^reset/(?P<title>[^/]+)$', views.reset),
    url(r'^add/(?P<title>[^/]+)$', views.add),
    url(r'^fetch/(?P<title>[^/]+)$', views.fetch),

    url(r'^set/(?P<title>[^/]+)$', views.set_one),
    url(r'^get/(?P<title>[^/]+)$', views.get_one),
]
