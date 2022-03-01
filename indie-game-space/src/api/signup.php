
<?php

    require './database.php';

    // Request for input data
    $devname = $_REQUEST["username"];
    $dev_email = $_REQUEST["email"];
    $dev_pass = $_REQUEST["password"];

    $query = "INSERT INTO dev_account (devUser, devPass, dev_email) VALUES ('". $devname . "','" . $dev_pass . "','". $dev_email ."')";
    $result = mysqli_query($connection, $query);

    if ($result === TRUE){
        echo "Account Created Successfully";
    } else {
        echo "There seems to be a problem!";
    }

    mysqli_close($connection);
?>