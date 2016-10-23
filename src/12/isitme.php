<?php
	include_once "connect.php";
	
	$code = $_POST['code'];
	//$code = '2147483647';
	$sql = mysql_query("SELECT * FROM `12id` WHERE id = '$code'");
	while($row = mysql_fetch_array($sql)){
		$answer = $row["taken"];
	};
	$array = array(
		0 => $answer,
	);
	//var_dump($array);
	echo json_encode($array);
?>