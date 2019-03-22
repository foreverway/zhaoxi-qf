<?php
require_once('config.php');
$username = $_GET["usertypenames"];
$userpwd = $_GET["usertypepersons"];
$str = "select count(*) from userinfo where section='$username'";
$result = mysql_query($str);
$result2 = mysql_fetch_array($result);
$obj = array();
if($result2[0]>0){
    $obj["code"] = 0;
    $obj["msg"] = "该部门已存在";
}else{
    $sql = "insert into userinfo (type,section,username) values ('1','$username','$userpwd')";
    mysql_query($sql);
    $obj["code"] = 1;
    $obj["msg"] = "添加成功";
};

echo json_encode($obj);

?>

