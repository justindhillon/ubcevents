#!/bin/sh
DATE_TODAY=$(printf "%(%F)T\n" $EPOCHSECONDS)

sudo -i -u postgres psql -c "DELETE FROM "Post" WHERE "eventDate" < $DATE_TODAY"
