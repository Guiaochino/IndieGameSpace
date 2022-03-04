

<?php

    require './database.php';

    if (isset($_SESSION)){

        $userlogged = $_SESSION["logged"];

        $getDeveloper = "SELECT profile_picture, devUser, dev_email FROM dev_account WHERE dev_account = '$userlogged'";
        $dev = mysqli_query($connection, $getDeveloper);

        $res_arr = array();

        if (isset($userlogged)){
            if (mysqli_num_rows($dev) > 0) {

                while ($row = mysqli_fetch_assoc($dev)){
                    $res_arr[] = implode($row);
                }

            } else {

                echo "No Information Provided";

            }
        }

        echo implode($res_arr);

    }

    

    mysqli_close($connection);
?>