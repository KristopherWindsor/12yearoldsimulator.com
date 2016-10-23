<?php
$host = getenv('DB_TWELVESIM_HOST');
$username = getenv('DB_TWELVESIM_USER');
$pass = getenv('DB_TWELVESIM_PW');;
$name = getenv('DB_TWELVESIM_DB');;

@mysql_connect("$host","$username","$pass") or die ("failed to connect to mysql database");
@mysql_select_db("$name") or die ("couldnt find mysql database");