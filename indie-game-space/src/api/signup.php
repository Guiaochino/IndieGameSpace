<?php

    require './database.php';

    // Request for input data
    // TODO: Resolve Problem here
    $devname = $_REQUEST["username"];
    $dev_email = $_REQUEST["email"];
    $dev_pass = $_REQUEST["password"];
    $dev_type = $_REQUEST["type"];

    // Check Data
    if (isset($devname) || isset($dev_email) || isset($dev_pass) || isset($dev_type)){

        // Password Hash
        $hashed_pass = sha1($dev_pass);

        $query = "INSERT INTO dev_account (devUser, devPass, dev_email, dev_type ) VALUES ('$devname', '$hashed_pass', '$dev_email', '$dev_type')";
        $result = mysqli_query($connection, $query);

        if ($result){
            echo "Account Created Successfully";
        } else {
            echo "There seems to be a problem!";
        }

    } else {
        echo "No Data Available";
    }


    // Insert Data to DB
    

    mysqli_close($connection);
?>