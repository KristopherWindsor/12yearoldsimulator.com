<?php	
	include_once "connect.php";
	
	$code = $_POST['code'];
	//$code = '08617390452';
	$get = $_POST['get'];
	//$get = '0';
	$collection = array();
	//$sql = mysql_query("SELECT * FROM `12chats` WHERE id = '$code' and read = '0' ORDER BY date");
	$sql = mysql_query("SELECT * FROM `12chats` WHERE `read` = '0' and `sender` = '$get' ORDER BY date");
	while($row = mysql_fetch_array($sql)){
		$message = $row["chat"];
		$collection[] = $message;
	};
	mysql_query("UPDATE `12chats` SET `read` = '1' WHERE `sender` = '$get'");

	echo json_encode($collection);
?>