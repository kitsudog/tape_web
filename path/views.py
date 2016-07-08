from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from models import Path, Position


def index(request):
    return render(request, 'path/index.html')


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
