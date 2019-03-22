<?php
@require_once("config.php");
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

 $str = "select  *  from  datekaoqin";
 
$result = mysql_query($str);
$list = array();

while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["datetime"]=$item["datetime"];
    $temp["week"]=$item["week"];
    $temp["status"]=$item["status"];
    $list[] = $item;
}
echo  json_encode($list);
?>