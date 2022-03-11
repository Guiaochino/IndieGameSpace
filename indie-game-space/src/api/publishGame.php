<?php

    // Publish Games via Forms
    // TODO: Complete Feature

    require './database.php';

    // Request for data
    $userlogged = $_REQUEST["user"];
    $gamename = $_REQUEST["game_name"];
    $description = $_REQUEST["description"];
    $genre = $_REQUEST["genre"];
    $game_image = $_REQUEST["game_image"];
    $samp_image = $_REQUEST["samp_img"];
    $game_link = $_REQUEST["link"];

    // process multiple files for sample images
    $samp_arr = explode(",",$samp_image);
    $final_samp = array();
    
    for ($index = 0; $index < count($samp_arr); $index += 2){
        $b64 = $samp_arr[$index];
        $data = $samp_arr[$index + 1];
        $final_samp[] = $b64 . $data;
    }

    // check length of sample images
    $samp_num = count($final_samp);

    if ($samp_num == 1) {
        $addGame = "INSERT INTO game_profile (dev_id, game_name, game_desc, game_genre, game_image, samp_img_1, trailer_link) VALUES ((SELECT devID from dev_account WHERE dev_account.devUser = '$userlogged'), '$gamename', '$description', '$genre', '$game_image', '$final_samp[0]', '$game_link')";
    } else if ($samp_num == 2) {
        $addGame = "INSERT INTO game_profile (dev_id, game_name, game_desc, game_genre, game_image, samp_img_1, samp_img_2, trailer_link) VALUES ((SELECT devID from dev_account WHERE dev_account.devUser = '$userlogged'), '$gamename', '$description', '$genre', '$game_image', '$final_samp[0]', '$final_samp[1]', '$game_link')";
    } else if ($samp_num == 3) {
        $addGame = "INSERT INTO game_profile (dev_id, game_name, game_desc, game_genre, game_image, samp_img_1, samp_img_2, samp_img_3, trailer_link) VALUES ((SELECT devID from dev_account WHERE dev_account.devUser = '$userlogged'), '$gamename', '$description', '$genre', '$game_image', '$final_samp[0]', '$final_samp[1]', '$final_samp[2]', '$game_link')";
    } else if ($samp_num == 4) {
        $addGame = "INSERT INTO game_profile (dev_id, game_name, game_desc, game_genre, game_image, samp_img_1, samp_img_2, samp_img_3, samp_img_4, trailer_link) VALUES ((SELECT devID from dev_account WHERE dev_account.devUser = '$userlogged'), '$gamename', '$description', '$genre', '$game_image', '$final_samp[0]', '$final_samp[1]', '$final_samp[2]', '$final_samp[3]', '$game_link')";
    } else if ($samp_num == 5) {
        $addGame = "INSERT INTO game_profile (dev_id, game_name, game_desc, game_genre, game_image, samp_img_1, samp_img_2, samp_img_3, samp_img_4, samp_img_5, trailer_link) VALUES ((SELECT devID from dev_account WHERE dev_account.devUser = '$userlogged'), '$gamename', '$description', '$genre', '$game_image', '$final_samp[0]', '$final_samp[1]', '$final_samp[2]', '$final_samp[3]', '$final_samp[4]', '$game_link')";
    } else if ($samp_num == 6) {
        $addGame = "INSERT INTO game_profile (dev_id, game_name, game_desc, game_genre, game_image, samp_img_1, samp_img_2, samp_img_3, samp_img_4, samp_img_5, samp_img_6, trailer_link) VALUES ((SELECT devID from dev_account WHERE dev_account.devUser = '$userlogged'), '$gamename', '$description', '$genre', '$game_image', '$final_samp[0]', '$final_samp[1]', '$final_samp[2]', '$final_samp[3]', '$final_samp[4]', '$final_samp[5]', '$game_link')";
    } else {
        $addGame = "INSERT INTO game_profile (dev_id, game_name, game_desc, game_genre, game_image, trailer_link) VALUES ((SELECT devID from dev_account WHERE dev_account.devUser = '$userlogged'), '$gamename', '$description', '$genre', '$game_image', '$game_link')";
    }

    $insertGame = mysqli_query($connection, $addGame);

    if ($insertGame) {
        echo "Game Successfully Added";
    } else {
        echo "Somthing Went Wrong! Try Again Later";
    }




    mysqli_close($connection);

?>