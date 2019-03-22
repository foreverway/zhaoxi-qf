
function qingjiashenpi(skip,show)
{
//判断是否登录
if(getCookie("username"))
{
	//获取数据
function getData1(){
	var p  = new Promise(function(resolve,reject){
		$.ajax({
			type:"get",
			url:"../php/qingjiashenpi.php",
			data:{
				skipNum:skip,
				showNum:show
			},
			success:function(data){
				var data = JSON.parse(data);
				resolve(data);
			}
		});
	})
	return p;
}


function getData2(qingjiadanID){
	var p  = new Promise(function(resolve,reject){
		$.ajax({
			type:"get",
			url:"../php/qingjiashenpi2.php",
			data:`qingjiadanID=${qingjiadanID}`,
			success:function(data){
				var data = JSON.parse(data);
				resolve(data);
			}
		});
	})
	return p;
}

function getData3(biaoti,startTime,endTime,status,shenqingren){
	var p  = new Promise(function(resolve,reject){
		$.ajax({
			type:"get",
			url:"../php/qingjiashenpi3.php",
			data:`biaoti=${biaoti}
			&startTime=${startTime}
			&endTime=${endTime}
			&status=${status}
			&shenqingren=${shenqingren}
			&skipNum=${skip}&
			showNum=${show}`,
			success:function(data){
				var data = JSON.parse(data);
				resolve(data);
			}
		});
	})
	return p;
}

function getData4(qingjiadanID){
	var p  = new Promise(function(resolve,reject){
		$.ajax({
			type:"get",
			url:"../php/qingjiashenpi4.php",
			data:`qingjiadanID=${qingjiadanID}`,
			success:function(data){
				var data = JSON.parse(data);
				resolve(data);
			}
		});
	})
	return p;
}
//页面一出来就默认显示所有数据
getData1().then(function(list){
	setData(list);
});
//查看详细数据
$(document).on("click",".chakan",function(){
	$(".detail").show();
	qingjiadanID = $(this).parent().children(".qingjiaID").html();
	getData2(qingjiadanID).then(function(data){
		setData2(data);
	})
})

$(document).on("click","#close",function(){
	$(".detail").hide();
})
//单选按钮
var status = 1;
$("input[name=status]").click(function(){
	status = $(this).val();
})
//点击查询进行相关操作
$(".chaxun").click(function(){
	var biaoti = $("#title").val();
	var startTime = $("#statrTime").val();
	var endTime = $("#endTime").val();
	var shenqingren = $("#shenqingren").val();
	getData3(biaoti,startTime,endTime,status,shenqingren).then(function(data){
		setData3(data);
	})
})
//审批
$(document).on("click",".queding",function(){
	if($("#beizhu").val().length>0)
	{
		getData4(qingjiadanID).then(function(data){
			setData4(data);
		})
	}
	else{
		alert("备注不能为空！");
	}
})
$(document).on("click",".quxiao",function(){
	$(".detail").hide();
})
//数据处理操作
function setData(data)
{
	var str = `<tr class="table_title">
	<td>请假单ID</td>
	<td>申请人</td>
	<td>标题</td>
	<td>起始时间</td>
	<td>结束时间</td>
	<td>申请时间</td>
	<td>请假单状态</td>
	<td>查看</td>
	</tr>`;
	data.forEach(function(item){
		var {qingjiadanID,
			shenqingren,
			biaoti,
			startTime,
			endTime,
			shenqingTime,
			qingjiadanStatus}=item;
			var Statu = qingjiadanStatus;
			if(qingjiadanStatus==2)
			{
				Statu="归档";
			}
			if(qingjiadanStatus==3)
			{
				Statu="待审批";
			}
			str+=`<tr class="table_content">
			<td class="qingjiaID">${qingjiadanID}</td>
			<td class="qingjiaPeople">${shenqingren}</td>
			<td class="qingjiaTitle">${biaoti}</td>
			<td class="qingjiaStart">${startTime}</td>
			<td>${endTime}</td>
			<td>${shenqingTime}</td>
			<td class="guidang">${Statu}</td>
			<td class="chakan">查看</td>
			</tr>`;
		})
	$(".content").html(`${str}`);

}


function setData2(data){
	var shenpiren = getCookie("username");
	var date = new Date();
	var dateStr = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	var {qingjiadanID,shenqingren,biaoti,startTime,endTime,shenqingTime} = data;
	$(".danhaoInfo").html(qingjiadanID);
	$(".shenqingR").html(shenqingren);
	$(".biaoti").val(biaoti);
	$(".StartTime").val(startTime);
	$(".EndTime").val(endTime);
	$("#shawdowTime").html(shenqingTime);
	$("#shenpiren").html(shenpiren);
	$("#shenpiTime").html(dateStr);	
	}

	function setData3(data)
	{
		var str = `<tr class="table_title">
		<td>请假单ID</td>
		<td>申请人</td>
		<td>标题</td>
		<td>起始时间</td>
		<td>结束时间</td>
		<td>申请时间</td>
		<td>请假单状态</td>
		<td>查看</td>
		</tr>`;
		data.forEach(function(item){
			var {qingjiadanID,
				shenqingren,
				biaoti,
				startTime,
				endTime,
				shenqingTime,
				qingjiadanStatus}=item;
				var Statu = qingjiadanStatus;
				if(qingjiadanStatus==2)
				{
					Statu="归档";
				}
				if(qingjiadanStatus==3)
				{
					Statu="待审批";
				}
				str+=`<tr class="table_content">
				<td class="qingjiaID">${qingjiadanID}</td>
				<td class="qingjiaPeople">${shenqingren}</td>
				<td class="qingjiaTitle">${biaoti}</td>
				<td class="qingjiaStart">${startTime}</td>
				<td>${endTime}</td>
				<td>${shenqingTime}</td>
				<td class="guidang">${Statu}</td>
				<td class="chakan">查看</td>
				</tr>`;
			})
		$(".content").html(`${str}`);

	}
	function setData4(data){
		// alert(data["msg"]);
		$(".detail").hide();
		window.location.reload();
	}



	new DatePicker("#statrTime", {
		date: "2019-3-01",
		dateFormat: "yyyy-mm-dd"
	});
	new DatePicker("#endTime", {
		dateFormat: "yyyy-mm-dd"
	});
}
else{
	window.location.href = "../html/login.html";
}
}

