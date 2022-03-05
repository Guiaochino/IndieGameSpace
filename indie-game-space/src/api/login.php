

<?php

    require './database.php';

    $username = $_POST["username"];
    $password = $_POST["password"];


    $queryLogin = "SELECT devUser, devPass FROM dev_account";
    $result = mysqli_query($connection, $queryLogin);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)){

            // Hashed Pass
            $hashed_pass = sha1($password);
            
            if ($username == $row["devUser"] && $hashed_pass == $row["devPass"]){
                echo true;
            } else {
                echo false;
            }
        }
    }
    // echo $username;
    // echo $password;

?>