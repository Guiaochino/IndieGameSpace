
<!-- Get Specific Index of Game for the Game Profile Page -->

<?php

    require './database.php';

    $query = "SELECT game_profile.*, dev_account.devUser FROM game_profile INNER JOIN dev_account ON game_profile.dev_id = dev_account.devID";
    $result = mysqli_query($connection, $query);

    if (mysqli_num_rows($result) > 0){
        while ($row  = mysqli_fetch_assoc($result)){
            echo $row;
        }
    } else {
        echo "No Database Available";
    }


    mysqli_close($connection);

?>