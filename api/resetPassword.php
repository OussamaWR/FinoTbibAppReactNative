<?php
require_once('config.php');
$email = $DecodedData['email'];
//$email = $_POST['email'];
$Requete = "SELECT * from users where email='$email'";
$Resultat = $pdo->query($Requete);
if ($user = $Resultat->fetch()) {
    $randPass='';
    $end=intval(rand(6,8));
    for($i=0;$i<$end;$i++){
        $rand=strval(rand(0,9));
        $randPass = $randPass . $rand;
    }
    $RequeteUpdate=$pdo->query("UPDATE users SET password=MD5('$randPass') where email='$email' ");
    if($RequeteUpdate){
        $Message = 'Your Password is '.$randPass.' change it asap !';
        echo $Message;
    }else{
        echo 'Update password faild !';
    }
}else{
    echo 'The email you entred does not exist !';
}


