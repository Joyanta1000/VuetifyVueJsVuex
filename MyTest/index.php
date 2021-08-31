<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once("function.php");

$insertdata = new DB_con();
//$input = json_decode(file_get_contents('php://input'),true);

if($_POST['action'] == 'insert'){

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$sql = $insertdata->insert($name,$email,$message);

}

?>