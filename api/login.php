<?php
require_once('config.php');
$email = $DecodedData['email'];
$pwd = $DecodedData['password'];
$Requete = "SELECT * from users where email='$email' and password=MD5('$pwd')";
$Resultat = $pdo->query($Requete);
if ($user = $Resultat->fetch()) {
    $Message = 'Login succesfully !';
    echo $Message;
} else {
    $Message = 'Login Failed !';
    echo $Message;
}

// $login = $_POST['username'];
// $pwd = $_POST['password'];