

<?php

    require './database.php';

    $getGameList = "SELECT game_profile.game_name, game_profile.game_image, game_profile.game_desc, dev_account.devUser FROM game_profile INNER JOIN dev_account WHERE game_profile.dev_id = dev_account.devID";
    $gameList = mysqli_query($connection, $getGameList);
    $listing = array();

    if (mysqli_num_rows($gameList)) {
        while ($game = mysqli_fetch_assoc($gameList)) {
            $listing[][] = $game;
        }
    } else {
        echo "No Games Available";
    }

    json_encode($listing);

    mysqli_close($connection);

?>