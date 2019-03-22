<?php
@require_once("config.php");
header('Access-Control-Allow-Origin:*');
// header('Access-Control-Allow-Methods:POST');
// header('Access-Control-Allow-Headers:x-requested-with,content-type');

// $date = $_GET["date"];
// $storename = $_GET["storename"];
// $bookprice = $_GET["bookprice"];
// $bookimg= $_GET["bookimg"];
// $bookname= $_GET["bookname"];

$str = "select  *  from  shopcar  ";

$result = mysql_query($str);
$list = array();

while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["storename"]=$item["storename"];
    $temp["bookprice"]=$item["bookprice"];
    $temp["bookimg"]=$item["bookimg"];
     $temp["bookname"]=$item["bookname"];
    $list[] = $item;
}

echo  json_encode($list);
?>