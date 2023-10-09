#!/bin/sh
DATE_TODAY=$(date +%Y-%m-%d)

echo $DATE_TODAY

SQL_QUERY="DELETE FROM \"Post\" WHERE \"eventDate\" < ('$DATE_TODAY');"

sudo -i -u postgres psql -c "$SQL_QUERY"
