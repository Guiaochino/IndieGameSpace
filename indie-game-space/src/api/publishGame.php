

<?php

    require './database.php';

    $_POST = json_decode(file_get_contents("php://input", true));

    // Request for data
    // $gamename = $_REQUEST["game_name"];
    // $description = $_REQUEST["description"];
    // $genre = $_REQUEST["genre"];
    // $game_image = $_REQUEST["game_image"];
    // $samp_image = $_REQUEST["samp_img"];
    // $game_link = $_REQUEST["link"];

    echo json_encode($_POST, JSON_PRETTY_PRINT);

    $publishQuery = "INSERT INTO game_profile VALUES ()";






?>