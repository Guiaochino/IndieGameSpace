

<?php

    require './database.php';

    $getDevelopers = "SELECT dev_account.profile_picture, dev_account.devUser, dev_account.dev_email FROM dev_account";
    $result = mysqli_query($connection, $getDevelopers);
    
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)){
            echo $row;
        }
    } else {
        echo "No Information Provided";
    }

    mysqli_close($connection);
?>