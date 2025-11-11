send#!/bin/sh
subject="mail subject"
body="Hello World"
from="no-reply@zenga.de"
to="adrian.szlagor@gmail.com"
echo -e "Subject:${subject}\n${body}" | sendmail -f "${from}" -t "${to}"
echo "mail sent"
