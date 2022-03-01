

<?php

    require './database.php';

    // $devname = $_POST['username'];
    // $devpass = $_POST['password'];

    $username = $_POST["username"];
    $password = $_POST["password"];


    $queryLogin = "SELECT devUser, devPass FROM dev_account";
    $result = mysqli_query($connection, $queryLogin);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)){
            if ($username == $row["devUser"] && $password == $row["devPass"]){
                $message = "Login Successful";
            } else {
                $message = "Username and Password do not match!";
            }
        }
    }

    echo $message;
    // return $message;

    mysqli_close($connection);
?>