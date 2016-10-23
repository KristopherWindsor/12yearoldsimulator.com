<?php
	//head
	include_once "connect.php";
	$heard = $_POST['replyToThis'];
	$date = date("c");
	$ip = $_SERVER['REMOTE_ADDR'];
	
	//insert results
	mysql_query("INSERT INTO `12sim.replies` (`saying`,`reply`,`date`,`ip`)
		VALUES
		('$_POST[saying]','$_POST[replyToThis]','$date','$ip')");
	
	//smart reply
	$results = array();
	$sql = mysql_query("SELECT * FROM `12sim.replies` WHERE `omit` = '0' AND `saying` LIKE '%$heard%'");
	if (mysql_num_rows($sql) != 0){
		while($row = mysql_fetch_array($sql)){
			$tmp = $row["reply"];
			if(strlen($tmp) != 1)
				$results[] = $tmp;
		};
	}
	echo json_encode($results);
?>