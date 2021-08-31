<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include_once("function.php");
$obj=new DB_con();

//here admin is a table name
$obj->show();
?>