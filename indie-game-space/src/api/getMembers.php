<?php

    // Get members of developer account

    require './database.php';

    $userlogged = $_REQUEST["username"];

    $getMembers = "SELECT member_name FROM dev_profile WHERE dev_id=(SELECT devID FROM dev_account WHERE dev_account.devUser = '$userlogged')";
    $result = mysqli_query($connection, $getMembers);

    $arr_obj = array();

    if (mysqli_num_rows($result) > 0) {

        while ($row = mysqli_fetch_object($result)){
            $arr_obj[] = $row;
        }

        echo json_encode($arr_obj, JSON_PRETTY_PRINT);

    }

    mysqli_close($connection);

?>