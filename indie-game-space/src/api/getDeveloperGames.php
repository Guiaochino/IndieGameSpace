

<?php

    require './database.php';

    // Get Logged Developer
    $developer = "blackboxgames";

    $queryDevsGames = "SELECT game_name from game_profile";
    $result = mysqli_query($connection, $queryDevsGames);

    if (mysqli_num_rows($result) > 0) {
        while ($row -> mysqli_fetch_assoc($result)) {
            echo $row["game_name"];
        }
    } else {
        echo "No Published Games";
    }

?>