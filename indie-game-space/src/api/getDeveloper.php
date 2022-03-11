

<?php

    // Get Developer Details for Developer Profile

    require './database.php';

    // $userlogged = $_REQUEST["username"];
    $userlogged = "blackboxgames";

    $getDeveloperAccount = "SELECT devUser, dev_email, media_link_fb, media_link_twt, media_link_ig, profile_picture FROM dev_account WHERE devUser = '$userlogged'";
    
    $dev = mysqli_query($connection, $getDeveloperAccount);

    $res_arr = array();

    if (mysqli_num_rows($dev) > 0) {

        while ($row = mysqli_fetch_assoc($dev)){
            $res_arr[] = $row;
        }

        echo json_encode($res_arr, JSON_PRETTY_PRINT);

    } else { echo false; }

    mysqli_close($connection);
?>