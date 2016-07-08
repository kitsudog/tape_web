# -*- coding:utf-8 -*-
import base64
import json

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.

from models import Title, Data
from utils.action import json_body


def index(request):
    return HttpResponse("hello")


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
    data.content = request.json
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
    ret = {'is_None': True, 'is_file': False, 'content': {}}
    if data is None:
        return JsonResponse(ret)
    title.cur = data.id
    title.save()
    ret['is_file'] = data.is_file
    if data.is_file:
        with data.file.open(mode='r'):
            ret['content'] = base64.b64encode(data.file.read(data.file.size))
    else:
        ret['content'] = json.loads(data.content)
    return JsonResponse(ret)
