<?php
$host = 'localhost';

//$username = 'root';
$username = 'windsorf_scolezU';
//$pass = 'pass';
$pass = 'SB2Pi]}D$XBD';
//$name = 'scolez';
$name = 'windsorf_scolez';

@mysql_connect("$host","$username","$pass") or die ("failed to connect to mysql database");
@mysql_select_db("$name") or die ("couldnt find mysql database");
?>