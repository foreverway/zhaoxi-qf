<?php
@require_once("config.php");
$usertel=$_GET["usertel"];
$userpwd=$_GET["userpwd"];
$username=$_GET["username"];
if($userpwd==""&&$usertel!=""){
    $sql="update userinfo set usertel=$usertel where username='$username'";
}else if($usertel==""&&$userpwd!=""){
    $sql="update userinfo set userpwd=$userpwd where username='$username'";  
}else{
    $sql="update userinfo set userpwd=$userpwd,usertel=$usertel where username='$username'";  
}
mysql_query($con,$sql);
$count=mysqli_affected_rows($con);
$obj=array();
if($count>0){
    $obj["code"]=1;
    $obj["msg"]="修改成功";
}else{
    $obj["code"]=0;
    $obj["msg"]="修改失败";
}
echo json_encode($obj);
?>