<?php
if ($_GET['randomId'] != "OVm_UrEZIUvCu0cAkoszlSTF70PWLhEc3LYlow36Hm0o7BZf2XDtG5L2nNI4Owws") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
