<?php
@require_once("config.php");
@header("Access-Control-Allow-Origin:*");
ini_set("error_reporting",E_ALL ^ E_NOTICE);

$date = $_GET["date"];
$num = $_GET["num"];
$storename = $_GET["storename"];
$bookprice = $_GET["bookprice"];
$bookimg= $_GET["bookimg"];
$bookname= $_GET["bookname"];
//在执行新增的时候 要判断该用户是否买过该商品

$str = "select count(*) from shopcar where date='$date' ";
//date符合的行数
$str2 = "select sum(num) from shopcar where date='$date'";
//date num的和
$result = mysql_query($str);

$item = mysql_fetch_array($result);

if($item[0]>0){
$str= "update shopcar set num = num+$num where date='$date' ";
}else{
$str = "insert into shopcar(date,storename,bookprice,bookimg,bookname,num) VALUES('$date','$storename','$bookprice','$bookimg','$bookname','$num')";
}
//执行其中一句
mysql_query($str);
$count = mysql_affected_rows();

$result2 = mysql_query($str2);
$item2 = mysql_fetch_array($result2);
$obj = array();

if($count>0){
$obj["code"]=1;
$obj["msg"]= "购买成功";
$obj["num"] = $item2[0];
}else{
$obj["code"]=0;
$obj["msg"]= "购买失败";
}

echo json_encode($obj);

?>
<!-- $date = $_GET["date"];
// // $num = $_GET["num"];
// $num=++$num;
// $str="UPDATE shopcar SET num = '$num' WHERE date = 'date'";

$str = "select * from shopcar where date='$date' ";
$res = mysql_query($str);
echo  json_encode($item);
$list = array();
if($item==true){
    $num=++$num;

    while($item = mysql_fetch_array($res)){
       $num++;
//        $item1["num"]= $item["num"];
// echo  json_encode($item["num"]);
//        $item["num"]= $item1["num"];
    }
    
}

else{
$storename = $_GET["storename"];
$bookprice = $_GET["bookprice"];
$bookimg= $_GET["bookimg"];
$bookname= $_GET["bookname"];

$str=" insert  into shopcar(date,storename,bookprice,bookimg,bookname) VALUES('$date','$storename','$bookprice','$bookimg','$bookname')";
$result = mysql_query($str);
$list = array();
while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["date"]=$item["date"];
    $temp["storename"]=$item["storename"];
    $temp["bookprice"]=$item["bookprice"];
    $temp["bookimg"]=$item["bookimg"];
    $temp["bookname"]=$item["bookname"];
    $list1[] = $item;
}
}
echo  json_encode($list1); -->