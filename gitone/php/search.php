
<?php
@require_once("config.php");
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');


$searchin= $_GET["searchin"];

$str ="select * from onebook where storename LIKE '%$searchin%' OR bookprice LIKE '%$searchin%' OR status LIKE '%$searchin%' OR address LIKE '%$searchin%' ";

$result = mysql_query($str);
$list = array();

while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["storename"]=$item["storename"];
    $temp["bookprice"]=$item["bookprice"];
    $temp["address"]= $item["address"];
    $temp["status"]=$item["status"];
    $temp["msg"]=$item["msg"];
     $temp["bookimg"]=$item["bookimg"];
    $list[] = $item;
}

echo  json_encode($list);
?>