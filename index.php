<?php

$html = <<< HTML
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>PHP HMR</title>
</head>
<body>
<h1>PHP HMR</h1>
<div id="root"></div>
	<script src="http://localhost:3003/dist/regular.js"></script>
<!--	<script src="http://localhost:3003/dist/react.js"></script>-->
</body>
</html>
HTML;

echo $html;

