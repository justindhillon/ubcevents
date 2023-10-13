#!/bin/sh
DATE_TODAY=$(date +%Y-%m-%d)

SQL_QUERY="DELETE FROM \"Post\" WHERE \"eventDate\" < ('$DATE_TODAY');"

sudo -i -u postgres psql -c "$SQL_QUERY"
