<?php
	include_once "connect.php";

	
	$date = date("c");
	$ip = $_SERVER['REMOTE_ADDR'];
	
	mysql_query("INSERT INTO 12chats (`id`,`chat`,`sender`)
		VALUES
		('$_POST[id]','$_POST[reply]','$_POST[sender]')");
?>