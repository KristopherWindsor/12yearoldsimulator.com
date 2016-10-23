<?php
	include_once "connect.php";
	$date = date("c");
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>
			12 Year Old Simulator
		</title>
		<link rel="stylesheet" href="style.css">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
		<meta name="Description" content="12 year old simulator: the most mindless chatroom you will ever be in">
	</head>
	<body>
		<img src="thumb.png" style="display:none"/>
		<div id="div">
			<div id="chat"></div>
			<input type="text" id="input" placeholder="say hello!" autocapitalize="off" />
		</div>
		<div id="style">
			<input type="checkbox" id="css" />
		</div>
		<div id="ad">
			<script type="text/javascript">
				( function() {
				if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
				var unit = {"calltype":"async[2]","publisher":"kristianwindsor","width":468,"height":90,"sid":"Chitika Default"};
				var placement_id = window.CHITIKA.units.length;
				window.CHITIKA.units.push(unit);
				document.write('<div id="chitikaAdBlock-' + placement_id + '"></div>');
				}());
			</script>
			<script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>
		</div>
	</body>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
</html>