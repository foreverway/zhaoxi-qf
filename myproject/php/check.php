<?php
@require_once("config.php");
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$biaoti = $_GET["biaoti"];
$startTime = $_GET["startTime"];
$endTime= $_GET["endTime"];

$str = "select  *  from  yuangonginfo  where biaoti='$biaoti' OR startTime ='$startTime' OR endTime ='$endTime'";

$result = mysql_query($str);
$list = array();
while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["qingjiadanID"]=$item["qingjiadanID"];
    $temp["shenqingren"]=$item["shenqingren"];
    $temp["biaoti"]= $item["biaoti"];
    $temp["startTime"]=$item["startTime"];
    $temp["endTime"]=$item["endTime"];
    $temp["shenqingTime"]=$item["shenqingTime"];
    $temp["qingjiadanStatus"]=$item["qingjiadanStatus"];
    $list[] = $item;
}
echo  json_encode($list);
?>