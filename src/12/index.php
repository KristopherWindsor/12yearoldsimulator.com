<?php
	include_once "connect.php";
	$date = date("c");
	
	$amountOfDigits = 10;
	$numbers = range(0,9);
	shuffle($numbers);
	$digits = 0;

	for($i = 0;$i < $amountOfDigits;$i++)
	   $digits .= $numbers[$i];

	mysql_query("INSERT INTO  `12id` (
		`id`,`date`
		)
		VALUES (
		'$digits','$date'
	);");
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>
			12 Year Old Simulator
		</title>
		<link rel="stylesheet" href="style.css">
		<meta name="Description" content="12 year old simulator. No need to go on Xbox Live anymore!">
		<script>
			var id = '<?php echo $digits; ?>';
			console.log('id:'+id);
		</script>
	</head>
	<body>
		<img src="thumb.png" style="display:none"/>
		<div id="div">
			<div id="chat"></div>
			<input type="text" id="input" placeholder="say hello!"/>
		</div>
	</body>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<!--<script type="text/javascript" src="jquery.js"></script>-->
	<script type="text/javascript" src="script.js"></script>
</html>