<?php
@require_once("config.php");
$skipNum = $_GET["skipNum"];
$showNum = $_GET["showNum"];
$str = "select * from yuangongInfo limit $skipNum,$showNum";
$res = mysql_query($str);
$list = array();
while ($result = mysql_fetch_array($res,MYSQLI_ASSOC)) {
  
  $list[] = $result;
}
echo json_encode($list);

?>