<?php

// Must match the one in webpack/webpack.config.dev.js
const DEV_URL = 'http://localhost:3003';

/**
 * Checking the environment based on if there are build files.
 * In DEV, the files are loaded in memory and the build files are removed.
 * By default, glob will exclude hidden files, so having '.gitignore' in '/dist' is not a problem.
 * PLEASE NOTE: In an actual project, you might want to use actual environment variables.
 */
function getEnvironment()
{
    return count(glob('dist/*')) == 0 ? 'DEV' : 'PROD';
}

function enqueueScript($name, $environment)
{
    if ($environment === 'DEV') {
        return DEV_URL . '/dist/' . $name . '.js';
    } else {
        $glob = glob('dist/' . $name . '.*.js');
        return !empty($glob) ? '/dist/' . basename($glob[0]) : null;
    }
}

function enqueueStyle($name)
{
    $path = 'dist/' . $name . '.*.css';
    $glob = glob($path);
    return !empty($glob) ? '/dist/' . basename($glob[0]) : null;
}


?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=DEVice-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php
    if (getEnvironment() !== 'DEV') {
        echo '<link rel="stylesheet" href="' . enqueueStyle('main') . '"/>';
        echo '<link rel="stylesheet" href="' . enqueueStyle('vanilla-example') . '"/>';
        echo '<link rel="stylesheet" href="' . enqueueStyle('react-example') . '"/>';
    }
    ?>
	<title>PHP with Webpack HMR</title>
</head>
<body>
<div class="container">
	<h1>PHP Hot Module Replacement</h1>
	<p>Edit a component's JS file or corresponding SCSS-file to see the hot-reload.</p>

	<!--Div for the vanilla component-->
	<div id="vanilla-example"></div>

	<!--Div for the react component-->
	<div id="react-example"></div>


    <?php
    // In DEV mode, you will need the runtime.js, in PROD you don't.
    if (getEnvironment() === 'DEV') {
        echo '<script src="' . enqueueScript('runtime', getEnvironment()) . '"></script>';
    }
    echo '<script src="' . enqueueScript('main', getEnvironment()) . '"></script>';
    echo '<script src="' . enqueueScript('vanilla-example', getEnvironment()) . '"></script>';
    echo '<script src="' . enqueueScript('react-example', getEnvironment()) . '"></script>';
    ?>

</div>
</body>
</html>

