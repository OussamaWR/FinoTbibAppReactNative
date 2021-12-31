<?php
require_once('config.php');
// $login = $_POST['username'];
// $pwd = $_POST['password'];
$login = $DecodedData['username'];
$pwd = $DecodedData['password'];
$Requete = "SELECT * from users where username='$login' and password=MD5('$pwd')";
$Resultat = $pdo->query($Requete);
if ($user = $Resultat->fetch()) {
    $Message = 'Login succesfully !';
    // $Response[] = array('Message' => $Message);
    // echo json_encode($Response);
    echo $Message;
} else {
    $Message = 'Login Failed !';
    // $Response[] = array('Message' => $Message);
    // echo json_encode($Response);
    echo $Message;
}
