import time


def to_utc(dt):
    return time.mktime(dt.utctimetuple())
