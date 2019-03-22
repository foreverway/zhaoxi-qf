<?php
// @header("content-Type: text/html; charset=utf-8");
// @header("Access-Control-Allow-Origin:*");
// $conn = mysql_connect("192.168.50.207:3306","root","root");
// mysql_select_db("group-project");
// mysql_query("set character set 'utf8'"); //设置执行语句的编码格式  防止中文乱码
// @header("content-Type: text/html; charset=utf-8");
// @header("Access-Control-Allow-Origin:*");
// mysql_connect("b-uk0b9gyyqu6jj1.bch.rds.gz.baidubce.com:3306","b_uk0b9gyyqu6jj1","123456");
// mysql_select_db("b_uk0b9gyyqu6jj1");
// mysql_query("set character set 'utf8'");

@header("content-type:text/html;charset=utf8");
@header("Access-Control-Allow-Origin:*");//cros
mysql_connect("localhost:3306","root","root");//你们的是3306
mysql_select_db("kfzuserinfo");//表示选择的执行的数据库
mysql_query("set character set 'utf8'"); //设置执行语句的编码格式  防止中文乱码

?>