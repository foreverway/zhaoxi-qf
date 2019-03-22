<?php
@require_once("config.php");
@header("Access-Control-Allow-Origin:*");


 $str = "select  *  from  yuangonginfo";
 
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