




<?php
@require_once("config.php");
$id = $_GET["id"];
$str = "update  userinfo  set type = 0  where id = $id";
mysql_query($str);
$count = mysql_affected_rows();

$obj= array();

if($count>0){
    $obj["code"]=1;
    $obj["msg"]="删除成功";

}else{
    $obj["code"]=0;
    $obj["msg"]="删除失败";
}

echo json_encode($obj);



?>
