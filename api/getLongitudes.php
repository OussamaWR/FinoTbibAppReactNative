<?php
require_once('config.php');
$Requete = "SELECT longitude from localisations";
$Resultat = $pdo->query($Requete);
$res='';
while ($user = $Resultat->fetch()) {
    $res=$res.','.$user['longitude'];
}
echo ltrim($res,',');

