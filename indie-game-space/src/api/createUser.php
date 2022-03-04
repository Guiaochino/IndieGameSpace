
<!-- Create User Account for Devs -->

<?php

    require './database.php';

    // $username = $_POST['username'];
    // $password = $_POST['password'];
    // $email = $_POST['email'];

    // $username = 'guiaochino';
    // $password = 'Pledge100';
    // $email = 'chinotiamzon@gmail.com';

    $queryAccount = "INSERT INTO dev_account (devUser, devPass) VALUES (' ".$username." ' , ' ".$password." ');";
    $queryProfile = "INSERT INTO dev_profile (devName, email) VALUES (' ".$username." ', ' ".$email." ');";

    
    mysqli_query($connection, $queryAccount);
    mysqli_query($connection, $queryProfile);
    

    mysqli_close($connection);

?>