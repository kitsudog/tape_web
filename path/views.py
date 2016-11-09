# coding=utf-8
from __future__ import print_function
import traceback

import requests
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from models import Path, Position, Cache


def index(request):
    return render(request, 'path/index.html')


def baidu_map(request, url):
    # http://api.map.baidu.com/geoconv/v1/?coords={0:F7},{1:F7}&from=1&to=5&ak=2ZIUCNh2zCEHkdM2mwZ01km8Mv5uyGIA
    params = dict(request.GET)
    if 'ak' not in params:
        params['ak'] = '2ZIUCNh2zCEHkdM2mwZ01km8Mv5uyGIA'
    # todo: 排序,编码
    key = '%s?%s' % (url, request.META['QUERY_STRING'])
    cache, created = Cache.objects.get_or_create(key=key)
    if not created and not cache.no_cache and cache.status != 0:
        print("cached [%s]" % key)
    else:
        headers = {
        }
        if 'HTTP_REFERER' in request.META:
            headers['referer'] = request.META['HTTP_REFERER']
        else:
            headers['referer'] = 'http://arguide.yomojoy.com'
        ret = requests.get('http://api.map.baidu.com/%s' % url, params, headers=headers)
        cache.value = ret.content
        cache.status = ret.status_code
        try:
            cache.save()
        except:
            traceback.print_exc()
    response = HttpResponse(cache.value)
    response.status_code = cache.status
    return response


def add(request):
    if len(filter(lambda x: x not in request.GET, ['lng', 'lat', 'path'])) > 0:
        return HttpResponse("fail", status=500)
    if len(request.GET['path'].strip()) == 0:
        return HttpResponse("no path", status=500)
    path = Path.objects.get_or_create(title=request.GET['path'])[0]
    position = Position()
    position.path = path
    position.longitude = request.GET['lng']
    position.latitude = request.GET['lat']
    if 'title' in request.GET:
        position.title = request.GET['title']
    position.save()
    return HttpResponseRedirect('/path/show/%s' % path.title)


def addPath(request):
    Path.objects.get_or_create(title=request.GET['path'])
    return HttpResponseRedirect('/path/show/%s' % request.GET['path'])


def show(request, path=''):
    path = path.encode('utf8')
    pos = []
    all_path = map(lambda x: x.title.encode('utf8'), Path.objects.all())
    if 'path' in request.GET:
        path = request.GET['path']
    if path in set(all_path):
        pos = Position.objects.filter(path__title=path)
    content = {
        'all_path': all_path,
        'path': path.title,
        'pos': map(lambda x: [x.longitude, x.latitude], pos)
    }
    return render(request, 'path/show.html', content)


def show_t(request, path=''):
    path = path.encode('utf8')
    pos = []
    all_path = map(lambda x: x.title.encode('utf8'), Path.objects.all())
    if 'path' in request.GET:
        path = request.GET['path']
    if path in set(all_path):
        pos = Position.objects.filter(path__title=path)
    content = {
        'all_path': all_path,
        'path': path.title,
        'pos': map(lambda x: [x.longitude, x.latitude], pos)
    }
    return render(request, 'path/show_t.html', content)


def draw_t(request, path=''):
    path = path.encode('utf8')
    pos = []
    all_path = map(lambda x: x.title.encode('utf8'), Path.objects.all())
    if 'path' in request.GET:
        path = request.GET['path']
    if path in set(all_path):
        pos = Position.objects.filter(path__title=path)
    content = {
        'path': path.title,
        'pos': map(lambda x: [x.longitude, x.latitude], pos)
    }
    return render(request, 'path/draw_t.html', content)


def mock(request):
    return render(request, 'path/baidu_mock.html')
