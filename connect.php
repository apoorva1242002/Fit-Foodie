<?php
    $HOSTNAME='localhost';
    $USERNAME='root';
    $PASSWORD='';
    $DATABASE='fitfoodie';
    $con=mysqli_connect($HOSTNAME,$USERNAME,$PASSWORD,$DATABASE);
    if(!$con)
    { 
        die(mysqli_error($con));
    }
    ?>
    

    

