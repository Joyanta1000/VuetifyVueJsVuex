<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$myArr = array("John", "Mary", "Peter", "Sally");

$myJSON = json_encode($myArr);

//echo $myJSON;

print_r($myJSON);
?>