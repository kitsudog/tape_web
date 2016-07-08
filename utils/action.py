#!/usr/bin/env python
# -*- coding:utf-8 -*-
import json


def json_body(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        if len(request.body) == 0:
            request.json = {}
        else:
            request.json = json.loads(request.body)
        return func(*args, **kwargs)

    return wrapper
