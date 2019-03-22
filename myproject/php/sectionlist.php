<?php
@require_once("config.php");
$username = $_GET["username"];

$sql="SELECT id,username,type,section FROM userinfo WHERE type='1' AND username LIKE '%$username%' ";


$result=mysql_query($sql);
$list = array();
while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["id"]=$item["id"];
    $temp["username"]=$item["username"];
    $temp["section"]=$item["section"];
    $list[] = $temp;
}
echo json_encode($list);

?>