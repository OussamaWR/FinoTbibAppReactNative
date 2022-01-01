<?php
require_once("config.php");
$fullname =  $DecodedData['fullname'];
$email =  $DecodedData['email'];
$pwd =  $DecodedData['password'];
$phone = $DecodedData['phone'];
$now=strtotime("now");
$created=date("Y-m-d H:i:s", $now+3600);
$updated=date("Y-m-d H:i:s", $now+3600);
$Requete = "INSERT into doctors(fullname,email,phone,password,localisation_id,speciality_id,state,created,updated) VALUES('$fullname','$email','$phone',MD5('$pwd'),1,1,0,'$created','$updated' ) ";
$Resultat = $pdo->query($Requete);
if ($Resultat) {
    $Message = 'Account created successfully !';
    echo $Message;
} else {
    $Message = 'Error Something went wrong !';
    echo $Message;
}