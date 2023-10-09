#!/bin/sh
DATE_TODAY=$(printf "%(%F)T\n" $EPOCHSECONDS)

echo $DATE_TODAY

SQL_QUERY="DELETE FROM \"Post\" WHERE \"eventDate\" < ('$DATE_TODAY');"

sudo -i -u postgres psql -c "$SQL_QUERY"
