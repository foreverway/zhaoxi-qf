<?php
@require_once("config.php");
@header("Access-Control-Allow-Origin:*");

$qingjiadanID = $_GET["qingjiadanID"];
$shenqingren = $_GET["shenqingren"];
$biaoti= $_GET["biaoti"];
$startTime = $_GET["startTime"];
$endTime= $_GET["endTime"];

$str=" insert  into yuangonginfo(qingjiadanID,shenqingren,biaoti,startTime,endTime) VALUES('$qingjiadanID','$shenqingren','$biaoti','$startTime','$endTime')";
$result = mysql_query($str);
$list = array();

while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["qingjiadanID"]=$item["qingjiadanID"];
    $temp["shenqingren"]=$item["shenqingren"];
    $temp["biaoti"]=$item["biaoti"];
    $temp["startTime"]=$item["startTime"];
    $temp["endTime"]=$item["endTime"];
    $list[] = $item;
}
echo  json_encode($list);
?>