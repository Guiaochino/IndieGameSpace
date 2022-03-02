
<!-- Updates User Account -->

<?php

    require "./database.php";

    $user = 'guiaochino';
    $surname = 'tiamzon';
    $givenname = 'guiaochino';
    $middlename = 'gonzales';

    $query = "UPDATE dev_profile SET surname = $surname, givenname = $givenname, middlename = $middlename WHERE devName = $user";
    $result = mysqli_query($connection, $query);

    mysqli_close($connection);
    
?>