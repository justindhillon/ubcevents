#!/bin/sh
DATE_TODAY='date'

sudo -i -u postgres psql -c "DELETE FROM Post WHERE eventDate <= $DATE_TODAY"
