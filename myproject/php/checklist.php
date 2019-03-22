<?php
@require_once("config.php");
$keyTime=$_GET["keyTime"];

$sql="SELECT * FROM datekaoqin WHERE datetime LIKE '%$keyTime%'";

$result = mysql_query($sql);
$list = array();
while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["id"]=$item["id"];
    $temp["datetime"]=$item["datetime"];
    $temp["status"]=$item["status"];
    $list[] = $temp;
}
echo json_encode($list);
?>