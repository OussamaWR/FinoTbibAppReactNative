<?php
require_once('config.php');
$Requete = "SELECT title from specialities";
$Resultat = $pdo->query($Requete);
$res='';
while ($user = $Resultat->fetch()) {
    $res=$res.','.$user['title'];
}
echo ltrim($res,',');




