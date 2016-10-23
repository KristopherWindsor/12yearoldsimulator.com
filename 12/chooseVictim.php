<?php
	include_once "../connect.php";
	$date = date("c");
	$old = $_POST['old'];

	$sql = mysql_query("SELECT * FROM `12id` WHERE `taken` = '0' ORDER BY `date` DESC LIMIT 1");
	$new = 0;
	while($row = mysql_fetch_array($sql)){
		$id = $row["id"];
		$new = $row["key"];
	};
	//echo $new . '<br>' . $old . '<br>';
	if($new != $old){
		mysql_query("UPDATE `12id` SET `taken` = '1' WHERE `id` = '$id'");
		$array = array(
			0 => $id,
		);
		echo json_encode($array);
	}else{
		$array = array(
			0 => '0',
		);
		echo json_encode($array);
	}
?>