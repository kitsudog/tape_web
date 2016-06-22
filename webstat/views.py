# Create your views here.
from django.db.models import Count
from django.http import HttpResponse
from django.shortcuts import render

from models import SimpleStat
from utils import to_utc


def index(request):
    return HttpResponse("HelloWorld")


def add(request, title, value):
    stat = SimpleStat()
    stat.title = title
    stat.value = value
    stat.save()
    return HttpResponse("ok")


def show(request, title):
    objs = SimpleStat.objects.filter(title=title)
    content = {
        'title': title,
        'dates': map(lambda x: to_utc(x.update_time), objs),
        'values': map(lambda x: x.value, objs),
    }
    return render(request, 'webstat/show.html', content)


def show_all(request):
    content = {
        'data': SimpleStat.objects.values('title').annotate(dcount=Count('title'))
    }
    return render(request, 'webstat/all.html', content)
