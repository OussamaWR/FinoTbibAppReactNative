<?php 
    $pdo= new PDO("mysql:host=localhost;dbname=finotbib_db","root","");

    $EncodedData = file_get_contents('php://input'); //access data from react native app with json format
    $DecodedData = json_decode($EncodedData, true);
   
