<?php
	include_once "connect.php";
	$heard = $_POST['replyToThis'];
	
	$results = array();
	$sql = mysql_query("SELECT * FROM `12sim.replies` WHERE `saying` LIKE '%$heard%'");
	if (mysql_num_rows($sql) != 0){
		while($row = mysql_fetch_array($sql)){
			$tmp = $row["reply"];
			if(strlen($tmp) != 1)
				$results[] = $tmp;
		};
	}
	echo json_encode($results);
?>