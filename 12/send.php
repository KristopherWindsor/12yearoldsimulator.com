<?php
	include_once "connect.php";
	
	$date = date("c");
	$ip = $_SERVER['REMOTE_ADDR'];
	
	mysql_query("INSERT INTO chatlog (`saying`,`reply`,`date`,`ip`)
		VALUES
		('$_POST[saying]','$_POST[reply]','$date','$ip')");
?>