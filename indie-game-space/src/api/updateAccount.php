
<?php

    // Update Account for Changes

    require "./database.php";

    $user = $_REQUEST["user"];
    $devname = $_REQUEST["devname"];
    $profile = $_REQUEST["profile"];
    $email = $_REQUEST["email"];
    $type = $_REQUEST["type"];
    $members = $_REQUEST["members"];

    $member_arr = explode(",", $members);

    // Update Account Details
    $updateAccount = "UPDATE dev_account SET devUser='$devname', dev_email='$email', dev_type='$type', profile_picture='$profile' WHERE devUser='$user'";
    mysqli_query($connection, $updateAccount);

    // Check table if has members, if none insert, if has update
    $memberQuery = "SELECT * FROM devProfile WHERE dev_id = (SELECT devID FROM dev_account WHERE dev_account.devUser='$user')";
    $memberResult = mysqli_query($connection, $memberQuery);

    if ($memberResult){
        if (mysqli_num_rows($memberResult) == count($member_arr)){
            // Update Members
                
            foreach($members_arr as $member) {
                $updateMember = "UPDATE dev_profile SET member_name='$member' WHERE dev_id = (SELECT devID FROM dev_account WHERE devUser='$user')";
                $result = mysqli_query($connection ,$updateMember);

                if ($result) {
                    echo "update success";
                } else {
                    echo "somehting went wrong -- update";
                }

                }

        } else if (mysqli_num_rows($memberResult) > 0 && mysqli_num_rows($memberResult) != count($member_arr)) {
            // DELETE and INSERT
            $deleteMember = "DELETE FROM dev_profile WHERE dev_id = (SELECT devID FROM dev_account WHERE devUser='$user')";
            $result = mysqli_query($connection, $deleteMember);

            if ($result) {

                foreach($member_arr as $member) {
                    $insertMember = "INSERT INTO 'dev_profile' ('dev_id', 'member_name') VALUES ((SELECT devID FROM dev_account WHERE devUser='$user'), '$member')";
                    $updateResult = mysqli_query($connection, $insertMember);

                    if ($updateResult) {
                        echo "update success";
                    } else {
                        echo "somehing went wrong -- update";
                    }
                }    
            } else {
                echo "something went wrong -- delete > update";
            }
        }
    } else {
        // INSERT
        foreach($member_arr as $member) {
            $insertMember = "INSERT INTO dev_profile (dev_id, member_name) VALUES ((SELECT devID FROM dev_account WHERE devUser='$user'), '$member')" ;
            $result = mysqli_query($connection, $insertMember);

            if ($result) {
                echo "update success -- insert";
            } else {
                echo "something went wrong -- insert";
            }
        }
    }
    

    mysqli_close($connection);
    
?>