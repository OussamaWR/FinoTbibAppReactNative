<?php
require_once("config.php");

$fullname =  $DecodedData['fullname'];
$email =  $DecodedData['email'];
$pwd =  $DecodedData['password'];
$phone = $DecodedData['phone'];
$speciality = $DecodedData['speciality'];
$latitude = $DecodedData['latitude'];
$longitude = $DecodedData['longitude'];

// $fullname =  $_POST['fullname'];
// $email =  $_POST['email'];
// $pwd =  $_POST['password'];
// $phone = $_POST['phone'];
// $speciality = $_POST['speciality'];

$ResultatLoca = $pdo->query("INSERT into localisations(latitude,longitude) VALUES('$latitude','$longitude')");
$locaID=$pdo->query("SELECT MAX(id) from localisations");
$loca_id=$locaID->fetch()['MAX(id)'];

$ResultatSpe=$pdo->query("SELECT id from specialities where title='$speciality'");
$speciality_id=$ResultatSpe->fetch()['id'];

$now=strtotime("now");
$created=date("Y-m-d H:i:s", $now+3600);
$updated=date("Y-m-d H:i:s", $now+3600);
$role='doctor';


$ResultatUser = $pdo->query("INSERT INTO users(fullname,email,password,role,state,created,updated) VALUES('$fullname','$email',MD5('$pwd'),'$role',1,'$created','$updated' ) ");
if ($ResultatUser) {
    $ResultatID = $pdo->query(" SELECT id from users WHERE email='$email' ");
    if($userID=$ResultatID->fetch()){
        $user_id=$userID['id'];
        $ResultatDoctor = $pdo->query("INSERT INTO doctors(phone,user_id,speciality_id,localisation_id) VALUES('$phone','$user_id','$speciality_id','$loca_id') ");
        if($ResultatDoctor){
            $Message = 'Account created successfully !';
            echo $Message;
        }
    }
} else {
    $Message = 'Error Something went wrong !';
    echo $Message;
}