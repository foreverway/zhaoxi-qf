<?php
@require_once("config.php");
$skipnum = $_GET["skipnum"];
$shownum = $_GET["shownum"];

$str = "select  *  from  goodsinfo limit $skipnum,$shownum";

$result = mysql_query($str);

$list = array();

while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["id"]=$item["id"];
    $temp["goodsname"]=$item["goodsname"];
    $temp["goodsimg"]= $item["goodsimg"];
    $temp["goodsnum"]=$item["goodsnum"];
    $temp["goodsprice"]=$item["goodsprice"];
    $list[] = $temp;
}
echo  json_encode($list);

?>
<!-- $.ajax({
type: "get",
url: "php/goodslist.php", //java aspx asp py
dataType: "json",
success: function (list) { //list是一个集合
var html = "";
list.forEach(function (item) {
var {
id,
goodsname,
goodsimg,
goodsnum,
goodsprice
} = item;
html +=
` <div class="tr">
    <img src="${goodsimg}">
    <p>
        <span>${goodsname}</span>
    </p>
    <p>
        <span>价格${(goodsprice*1).toFixed(2)}</span>
        <span>数量${goodsnum}</span>
        <span class='buy' onclick="gotomyshoppingcar('${id}')">立即购买</span>
    </p>
</div>`;
});
content.innerHTML = html;

},
error: function (info) {
console.log(info);
}
}); -->