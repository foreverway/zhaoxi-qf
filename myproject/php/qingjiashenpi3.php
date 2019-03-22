<?php
@require_once("config.php");
$title = $_GET["biaoti"];
$startTime = $_GET["startTime"];
$endTime = $_GET["endTime"];
$status = $_GET["status"];
$shenqingRen = $_GET["shenqingren"];
$skipNum = $_GET["skipNum"];
$showNum = $_GET["showNum"];
$str = "select * from yuangonginfo where biaoti='$title' or qingjiadanStatus='$status' or shenqingren='$shenqingRen' or shenqingTime>='$startTime' and shenqingTime<='$endTime' limit $skipNum,$showNum";
if($status==1)
{
	$str="select * from yuangonginfo limit $skipNum,$showNum";
}
$res = mysql_query($str);
$obj = array();
while ($result=mysql_fetch_array($res,MYSQLI_ASSOC)) {
	$obj[] = $result;
}

echo json_encode($obj);
?>