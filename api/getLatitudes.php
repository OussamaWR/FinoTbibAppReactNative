<?php
require_once('config.php');
$Requete = "SELECT latitude from localisations";
$Resultat = $pdo->query($Requete);
$res='';
while ($user = $Resultat->fetch()) {
    $res=$res.','.$user['latitude'];
}
echo ltrim($res,',');

