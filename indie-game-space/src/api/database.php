<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");

    session_start();

    // Properties
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $database = 'gamespace';

    // Establish Connection
    $connection = mysqli_connect($host, $user, $pass, $database);

    if (!$connection){
        die('Connection Failed' . mysqli_connect_error());
    }

?>