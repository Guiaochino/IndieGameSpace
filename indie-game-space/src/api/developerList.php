<?php

    // Get All Developers for the Developer List

    require './database.php';

    $developerQuery = "SELECT * FROM dev_account";
    $devs = mysqli_query($connection, $developerQuery);

    $devs_arr = array();

    if (mysqli_num_rows($devs) > 0) {
        while ($row = mysqli_fetch_assoc($devs)) {
            $devs_arr[] = $row;
        }
        echo json_encode($devs_arr, JSON_PRETTY_PRINT);
    }

    mysqli_close($connection);

?>