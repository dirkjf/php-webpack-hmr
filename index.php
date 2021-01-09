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
<p>If you edit this file or the corresponding SCSS-file, this module will hot-reload.</p>

<!--Div for the vanilla component-->
<div id="vanilla-example"></div> 

<!--Div for the react component-->
<div id="react-example"></div> 

    <!-- In Dev mode, you will need the runtime.js and all entries. In Prod you can omit runtime.js -->
	<script src="http://localhost:3003/dist/runtime.js"></script> 
	<script src="http://localhost:3003/dist/vanilla-example.js"></script>
	<script src="http://localhost:3003/dist/react-example.js"></script>
</body>
</html>
HTML;

echo $html;

