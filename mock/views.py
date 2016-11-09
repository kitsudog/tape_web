# -*- coding:utf-8 -*-
import base64
import json

import time

from django.http import HttpResponse, JsonResponse
# Create your views here.
from models import Title, Data
from utils.action import json_body


def index(request):
    from django.core.cache import cache
    cache.set('test', Data.objects.all())
    return HttpResponse("hello")


def reset(request, title):
    """
    重置一下
    :param request:
    :param title:
    :return:
    """
    title = Title.objects.get_or_create(defaults={"name": title})[0]
    title.cur = 0
    title.save()
    # Data.objects.filter(title=title).delete()
    return HttpResponse("reset [%s] ok" % title.name)


@json_body
def add(request, title):
    """
    添加记录
    :param request:
    :param title: 分类
    :return:
    """
    title = Title.objects.get_or_create(defaults={"name": title})[0]
    data = Data()
    data.title = title
    data.content = json.dumps(request.json)
    data.time = time.time() - time.mktime(title.start.utctimetuple())
    data.save()
    return HttpResponse("ok")


def fetch(request, title):
    """
    :param request:
    :param title: 分类
    :return:
    """
    title = Title.objects.get_or_create(defaults={"name": title})[0]
    data = Data.objects.filter(title=title, id__gt=title.cur).first()
    ret = {'is_none': True, 'is_file': False, 'content': {}}
    if data is None:
        return JsonResponse(ret)
    title.cur = data.id
    title.save()
    ret['is_file'] = data.is_file
    ret['is_none'] = False
    if data.is_file:
        with data.file.open(mode='r'):
            ret['content'] = base64.b64encode(data.file.read(data.file.size))
    else:
        ret['content'] = json.loads(data.content)
    return JsonResponse(ret)


cache = {}


@json_body
def set_one(request, title):
    """

    :param request:
    :param title:
    :return:
    """
    data = Data()
    data.content = json.dumps(request.json)
    global cache
    cache[title] = data
    return HttpResponse("ok")


def get_one(request, title):
    """

    :param request:
    :param title:
    :return:
    """
    ret = {'is_none': True, 'is_file': False, 'content': {}}
    global cache
    if title in cache:
        data = cache[title]
        ret['is_file'] = data.is_file
        ret['is_none'] = False
        if data.is_file:
            with data.file.open(mode='r'):
                ret['content'] = base64.b64encode(data.file.read(data.file.size))
        else:
            ret['content'] = json.loads(data.content)
    return JsonResponse(ret)
