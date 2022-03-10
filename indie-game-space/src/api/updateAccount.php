
<?php

    // Update Account for Changes

    require "./database.php";

    $user = $_REQUEST["user"];
    $devname = $_REQUEST["devname"];
    $profile = $_REQUEST["profile"];
    $email = $_REQUEST["email"];
    $type = $_REQUEST["type"];
    $members = $_REQUEST["members"];

    $updateAccount = "UPDATE dev_account SET devUser='$devname', dev_email='$email', dev_type='$type', profile_picture='$profile' WHERE devUser='$user'";
    $result = mysqli_query($connection, $updateAccount);

    if ($result) {
        // Check table if has members, if none insert, if has update
        $memberQuery = "SELECT * FROM devProfile WHERE dev_id = (SELECT devID FROM dev_account WHERE devUser='$user')";
        $memberResult = mysqli_query($connection, $memberQuery);

        if (mysqli_num_rows($memberResult) == count($members)){
            // Update Members
            
            foreach($members as $member) {
                $updateMember = "UPDATE dev_profile SET member_name='$member' WHERE dev_id = (SELECT devID FROM dev_account WHERE devUser='$user')";
                $result = mysqli_query($connection ,$updateMember);

                if ($result) {
                    echo "update success";
                } else {
                    echo "somehting went wrong -- update";
                }

            }

        } else if (mysqli_num_rows($memberResult) > 0 && mysqli_num_rows($memberResult) != count($members)) {
            // DELETE and INSERT
            $deleteMember = "DELETE FROM dev_profile WHERE dev_id = (SELECT devID FROM dev_account WHERE devUser='$user')";
            $result = mysqli_query($connection, $deleteMember);

            if ($result) {
                echo "delete successful";

                foreach($members as $member) {
                    $insertMember = sprintf("INSERT INTO dev_profile (dev_id, member_name) VALUES ((), %s)", $member["name"]);
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
        
        } else {
            // INSERT
            foreach($members as $member) {
                $insertMember = sprintf("INSERT INTO dev_profile (dev_id, member_name) VALUES ((), %s)", $member["name"]);
                $result = mysqli_query($connection, $insertMember);

                if ($result) {
                    echo "update success -- insert";
                } else {
                    echo "something went wrong -- insert";
                }
            }
        }

    } else {
        echo "Something went wrong -- selection";
    }
    

    mysqli_close($connection);
    
?>