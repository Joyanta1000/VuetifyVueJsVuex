<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
define('DB_SERVER','localhost');
define('DB_USER','root');
define('DB_PASS' ,'');
define('DB_NAME', 'test');
class DB_con
{
function __construct()
{
$con = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$this->dbh=$con;
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
}
public function insert($name,$email,$message)
{
$ret=mysqli_query($this->dbh,"insert into contact (name,email,message)
values('$name','$email','$message')");
return $ret;
}

//  public function show()
//  {
// $ret = mysqli_query($this->dbh, "select * from contact");
// if($ret->num_rows > 0) {
//   print_r( $ret->fetch_all(MYSQLI_ASSOC) );
// }
// else{
//  return false;
// }


public function show()
{

$quer = mysqli_query($this->dbh,"select * from contact");
		
$res = array($quer->fetch_all(MYSQLI_ASSOC));

$ret = json_encode($res);

print_r($ret);

}
// $result=$this->conn->query($sql);
//       if($result->num_rows > 0) {
//          return $result->fetch_all(MYSQLI_ASSOC);
//       }
//       else{
//         return false;
//       }

}
?>