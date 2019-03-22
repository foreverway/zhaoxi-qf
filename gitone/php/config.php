<?php
@header("content-type:text/html;charset=utf8");
@header("Access-Control-Allow-Origin:*");
// header('Access-Control-Allow-Methods:POST');
// header('Access-Control-Allow-Headers:x-requested-with,content-type');
 mysql_connect("b-c3kgxojdz94ns3.bch.rds.gz.baidubce.com:3306"," b_c3kgxojdz94ns3","123456");
mysql_select_db(" b_c3kgxojdz94ns3");
// mysql_connect("127.0.0.1:3306","root","root");
// mysql_select_db("kfzuserinfo");
mysql_query("set character set 'utf8'");


?>