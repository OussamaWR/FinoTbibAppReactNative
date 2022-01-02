<?php
require_once("config.php");
$fullname = $DecodedData['fullname'];
$email = $DecodedData['email'];
$pwd = $DecodedData['password'];
// $fullname = $_POST['fullname'];
// $email = $_POST['email'];
// $pwd = $_POST['password'];
$role='client';
$state=0;
$now=strtotime("now");
$created=date("Y-m-d H:i:s", $now+3600);
$updated=date("Y-m-d H:i:s", $now+3600);
$Requete = "INSERT into users(fullname,email,password,role,state,created,updated) 
VALUES('$fullname','$email',MD5('$pwd'),'$role','$state','$created','$updated') ";
$Resultat = $pdo->query($Requete);
if ($Resultat) {
    $Message = 'Account created successfully !';
    echo $Message;
} else {
    $Message = 'Error Something went wrong !';
    echo $Message;
}

