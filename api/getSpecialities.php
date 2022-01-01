<?php
require_once('config.php');
$Requete = "SELECT title from specialities";
$Resultat = $pdo->query($Requete);
$res=array();
$i=0;
while ($user = $Resultat->fetch()) {
    $res[$i]=$user['title'];
    $i++;
} 
echo json_encode($res);



