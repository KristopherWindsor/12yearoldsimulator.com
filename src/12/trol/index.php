<?php
	include_once "../connect.php";

	$sql = mysql_query("SELECT * FROM `12id` WHERE `taken` = '0' ORDER BY `date` DESC LIMIT 1");
	$id = 0;
	while($row = mysql_fetch_array($sql)){
		$id = $row["key"];
	};
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>
			12 Year Old Simulator Troller
		</title>
		<link rel="stylesheet" href="style.css">
		<meta name="Description" content="12 year old simulator troller. No need to go on Xbox Live anymore!">
		<script>
			var old = '<?php echo $id; ?>';
			console.log('old:'+old);
		</script>
	</head>
	<body>
		<img src="thumb.png" style="display:none"/>
		<div id="div">
			<div id="chat"></div>
			<p id="wait"></p>
			<input type="text" id="input" placeholder="Say faggot!"/>
		</div>
	</body>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<!--<script type="text/javascript" src="jquery.js"></script>-->
	<script type="text/javascript" src="script.js"></script>
</html>