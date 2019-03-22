<?php
@require_once("config.php");
header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods:POST');
//  header('Access-Control-Allow-Headers:x-requested-with,content-type');


$id= $_GET["id"];

$str = "select  *  from  msg  where id='$id' ";

$result = mysql_query($str);
$list = array();

while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["bookname"]=$item["bookname"];
    $temp["witer"]=$item["witer"];
    $temp["price"]= $item["price"];
    $temp["bookimg"]=$item["bookimg"];
    $temp["bookstore1"]=$item["bookstore1"];
    $temp["bookstore2"]=$item["bookstore2"];
    $temp["bookstore3"]=$item["bookstore3"];
    $temp["bookmsg"]=$item["bookmsg"];
    $list[] = $item;
}

echo  json_encode($list);
?>