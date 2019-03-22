<?php
@require_once("config.php");
$id=$_GET["id"];
$username = $_GET["username"];
$type = $_GET["usertype"];
$section = $_GET["usersection"];
$sql = "update userinfo set username='$username',type='$type',section='$section' where id=$id";
mysql_query($con,$sql);
$result = mysqli_affected_rows($con);
$obj = array();
if($result>0){
    $obj["code"] = 1;
    $obj["msg"] = "修改成功";
}else{
    $obj["code"] = 0;
    $obj["msg"] = "添加失败";
}
echo json_encode($obj);
?>