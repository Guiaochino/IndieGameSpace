

<?php

    // Get Developer Details for Developer Profile

    require './database.php';

    $userlogged = $_REQUEST["username"];

    $getDeveloper = "SELECT profile_picture, devUser, dev_email FROM dev_account WHERE devUser = '$userlogged'";
    $dev = mysqli_query($connection, $getDeveloper);

    $res_arr = array();

    if (mysqli_num_rows($dev) > 0) {

        while ($row = mysqli_fetch_object($dev)){
            $res_arr[] = $row;
        }

        echo json_encode($res_arr, JSON_PRETTY_PRINT);

    } else {

        echo "No Information Provided";

    } 

    mysqli_close($connection);
?>