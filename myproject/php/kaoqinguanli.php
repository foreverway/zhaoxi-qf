<?php
@require_once("config.php");
$str = "select * from userinfo";
$res = mysql_query($str);
$list = array();
while ($result = mysql_fetch_array($res,MYSQLI_ASSOC)) {
	$list[] = $result;
}
echo json_encode($list);
?>