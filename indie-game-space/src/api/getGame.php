
<!-- Get Specific Index of Game for the Game Profile Page -->

<?php

    require './database.php';

    $query = "SELECT (dev_id, game_name, game_desc, game_image, samp_img_1, samp_img_2, samp_img_3, samp_img_4, samp_img_5, samp_img_6, trailer_link, rating) FROM game_profile";
    $result = mysqli_query($connection, $query);

    if (mysqli_num_rows($result) > 0){
        while ($row  = mysqli_fetch_assoc($result)){
            echo $row['dev_id'];
        }
    } else {
        echo "No Database Available";
    }


    mysqli_close($connection);

?>