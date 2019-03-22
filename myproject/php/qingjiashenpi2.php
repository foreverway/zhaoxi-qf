<?php
@require_once("config.php");
$qingjiadanID = $_GET["qingjiadanID"];
$str = "select * from yuangonginfo where qingjiadanID = $qingjiadanID";
$res = mysql_query($str);
$result = mysql_fetch_array($res,MYSQLI_ASSOC);
echo json_encode($result);
?>