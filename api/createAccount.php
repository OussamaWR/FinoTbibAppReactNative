<?php
require_once("config.php");
$fullname = $DecodedData['fullname'];
$login = $DecodedData['username'];
$pwd = $DecodedData['password'];
$Requete = "INSERT into users(fullname,username,password) VALUES('$fullname','$login',MD5('$pwd') ) ";
$Resultat = $pdo->query($Requete);
if ($Resultat) {
    $Message = 'Account created successfully !';
    echo $Message;
} else {
    $Message = 'Error Something went wrong !';
    echo $Message;
}
// $fullname = $_POST['fullname'];
// $email = $_POST['email'];
// $login = $_POST['username'];
// $pwd = $_POST['password'];
