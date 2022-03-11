<?php

    // Get Games of Specific Developer

    require './database.php';

    $userlogged = $_REQUEST["username"];
    echo json_encode($_REQUEST, JSON_PRETTY_PRINT);

    $devGameList = "SELECT * FROM game_profile WHERE dev_id=(SELECT devID FROM dev_account WHERE dev_account.devUser = '$userlogged')";
    $result = mysqli_query($connection, $devGameList);

    $games_arr = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)){
            $games_arr[] = $row;
        }

        echo json_encode($games_arr, JSON_PRETTY_PRINT);

    }

    mysqli_close($connection);

?>