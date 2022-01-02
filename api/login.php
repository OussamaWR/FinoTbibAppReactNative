<?php
require_once('config.php');
$email = $DecodedData['email'];
$pwd = $DecodedData['password'];
$Requete = "SELECT * from users where email='$email' and password=MD5('$pwd')";
$Resultat = $pdo->query($Requete);
if ($user = $Resultat->fetch()) {
    if($user['role']==='client'){
        $Message = 'Login Client succesfully !';
        echo $Message;
    }elseif($user['role']==='doctor'){
        $Message = 'Login Doctor succesfully !';
        echo $Message;
    }
} else {
    $Message = 'Login Failed !';
    echo $Message;
}

// $login = $_POST['username'];
// $pwd = $_POST['password'];