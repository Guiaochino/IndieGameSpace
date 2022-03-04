

<?php

    require './database.php';

    $username = $_POST["username"];
    $password = $_POST["password"];

    if (isset($username) && isset($password)){

        $queryLogin = "SELECT devUser, devPass FROM dev_account WHERE devUser = '$username'";
        $result = mysqli_query($connection, $queryLogin);

        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)){
                // Hashed Pass
                $hashed_pass = sha1($password);
                $row["devPass"];
                
                if ($username == $row["devUser"] && $hashed_pass == $row["devPass"]){
                    $success = true;
                } else {
                    $success = false;
                }
            }
        } else {
            echo "No Data Available";
        }

    }

    echo $success;
    // echo $username;
    // echo $password;

?>