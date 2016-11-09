#!/bin/bash
# Strict mode
if [ -z "$MYSQL_PORT_3306_TCP_ADDR" ]
then
    echo "启动测试数据库"
    export MYSQL_PORT_3306_TCP_ADDR=127.0.0.1
    service mysqld start
else
    echo "使用指定数据库[$MYSQL_PORT_3306_TCP_ADDR]"
fi
if [ -z "$MEMCACHED_PORT_11211_TCP_ADDR" ]
then
    echo "启动测试memcached"
    export MEMCACHED_PORT_11211_TCP_ADDR=127.0.0.1
    service memcached start
else
    echo "使用指定memcached[$MEMCACHED_PORT_11211_TCP_ADDR]"
fi
if [ -z "$SERVERID" ]
then
    export PREFIX=""
else
    export PREFIX="${SERVERID}_"
fi
export DB="${PREFIX}tape_web"

set -euo pipefail
pip2.7 install -r requirements.txt --trusted-host mirrors.aliyun.com -i http://mirrors.aliyun.com/pypi/simple

mysql -h$MYSQL_PORT_3306_TCP_ADDR -uroot -e"CREATE DATABASE IF NOT EXISTS $DB DEFAULT CHARSET utf8 COLLATE utf8_general_ci"
python2.7 manage.py makemigrations --noinput
python2.7 manage.py migrate
python2.7 manage.py InitServer

set +euo pipefail
if [ '$1' == "check" ]
then
    echo "检测服务可用性"
    python2.7 manage.py runserver 0.0.0.0:8000 &
    sleep 3
    curl http://127.0.0.1:8000
else
    echo "正常启动服务"
    python2.7 manage.py runserver 0.0.0.0:8000
fi
