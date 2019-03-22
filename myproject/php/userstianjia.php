<?php
require_once('config.php');
$username = $_GET["username"];
$type = $_GET["usertype"];
$section = $_GET["usersection"];
$sql = "insert into userinfo (username,type,section) values('$username','$type','$section')";
mysql_query($sql);
$result = mysqli_affected_rows($sql);
$obj = array();
if($result>0){
    $obj["code"] = 1;
    $obj["msg"] = "添加成功";
}else{
    $obj["code"] = 0;
    $obj["msg"] = "添加失败";
}

echo json_encode($obj);



?>