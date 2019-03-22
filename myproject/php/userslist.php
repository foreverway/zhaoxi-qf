<?php
@require_once("config.php");
$username = $_GET["username"];
$idKey = $_GET["id"];
$section = $_GET["section"];
$sql="SELECT id,username,section,`type` FROM userinfo WHERE username LIKE '%$username%' AND id LIKE '%$idKey%' AND section LIKE '%$section%'";

$result=mysql_query($sql);
$list = array();
while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["id"]=$item["id"];
    $temp["username"]=$item["username"];
    $temp["section"]=$item["section"];
    $temp["type"]=$item["type"];
    $list[] = $temp;
}
echo json_encode($list);

?>