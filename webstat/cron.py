#!/usr/bin/env python
# -*- coding:utf-8 -*-
from __future__ import print_function
from django_cron import CronJobBase, Schedule

from models import SimpleStat


class TestTask(CronJobBase):
    RUN_EVERY_MINS = 1
    code = "webstat.cron.TestTask"
    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)

    def do(self):
        print(SimpleStat.objects.all())
