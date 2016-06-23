from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add$', views.add),
    url(r'^addPath$', views.addPath),
    url(r'^show$', views.show),
    url(r'^show/(?P<path>[^/]+)$', views.show),
    url(r'^show_t$', views.show_t),
    url(r'^show_t/(?P<path>[^/]+)$', views.show_t),
]
