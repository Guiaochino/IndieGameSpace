<?php

    // Get Games to Display on Game List

    require './database.php';

    $getGameList = "SELECT game_profile.game_name, game_profile.game_desc, game_profile.game_genre, game_profile.game_image, dev_account.devUser FROM game_profile INNER JOIN dev_account ON game_profile.dev_id = dev_account.devID";
    // $getGameList = "SELECT * from game_profile";
    $gameList = mysqli_query($connection, $getGameList);

    $listing = array();


    if (mysqli_num_rows($gameList) > 0) {

        while ($game = mysqli_fetch_assoc($gameList)) {
            // $listing[] = $game;
            array_push($listing, $game);
        }

        echo json_encode($listing, JSON_PRETTY_PRINT);

    } else {
        echo "No Games Available";
    }

    

    mysqli_close($connection);

?>