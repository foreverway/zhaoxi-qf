<?php
@require_once("config.php");

//注册  先接受三个参数
$username = $_GET["newusername"];
$userpwd = $_GET["newuserpwd"];
$usertel= $_GET["newusertel"];

//准备好要执行的sql语句
$str = "select  count(*)  from  userinfo  where username='$username' OR usertel ='$usertel'";

$result = mysql_query($str);//执行指定的sql语句

$item = mysql_fetch_array($result);

$obj = array();
if($item[0]>0){//有数据
   $obj["code"] = 0;
    $obj["msg"] = "用户名或者手机号已经存在";
}else{//没有数据
    //执行新增的sql语句
    $str = "insert  into userinfo(username,userpwd,usertel) VALUES('$username','$userpwd','$usertel')";
    mysql_query($str);//执行新增语句

    $count  = mysql_affected_rows();//受影响的行数
    if($count>0){
        $obj["code"] = 1;
        $obj["msg"] = "注册成功";
    }else{
        $obj["code"] = 0;
        $obj["msg"] = "注册失败";
    }

}

echo  json_encode($obj);

?>