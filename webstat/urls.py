from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add/(?P<title>.+)/(?P<value>.+)$', views.add, name='add'),
    url(r'^show/(?P<title>[^/]+)/?$', views.show, name='show'),
    url(r'^show/$', views.show_all, name="index")
]
