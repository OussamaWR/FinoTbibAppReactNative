<?php
require_once("config.php");

    $fullname = $DecodedData['fullname'];
    $login = $DecodedData['username'];
    $pwd = $DecodedData['password'];

    // $fullname = $_POST['fullname'];
    // $email = $_POST['email'];
    // $login = $_POST['username'];
    // $pwd = $_POST['password'];

    try{
        $Requete = "INSERT into users(fullname,username,password) VALUES('$fullname','$login',MD5('$pwd') ) ";
        $Resultat = $pdo->query($Requete);
        $Message='Record inserted succesfully !' ;
    } catch(Exception $e){
        $Message=$e->getMessage();
    }
    $Response=array('Message' => $Message);
    echo json_encode($Response); 

