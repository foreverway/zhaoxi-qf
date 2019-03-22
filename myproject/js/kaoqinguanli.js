
if(getCookie("username"))
{
	$.ajax({
	type:"get",
	url:"../php/kaoqinguanli.php",
	success:function(data){
		var data = JSON.parse(data);
		var str = `<tr class="tr">
		<td>序号</td>
		<td><a href="javascript:">用户ID</a></td>
		<td><a href="javascript:">用户名</a></td>
		<td><a href="javascript:">部门</a></td>
		<td>查看</td>
		</tr>`;
		data.forEach(function(item){
			var {id,username,userID,section}=item;
			str+=`<tr>
			<td>${id}</td>
			<td>${userID}</td>
			<td>${username}</td>
			<td>${section}</td>
			<td class="chakan">查看</td>
			</tr>`;
		})
		$(".biaoge").html(`${str}`);
	
	}
});

$(document).on("click",".chakan",function(){
	$(".shawdow").show();

})
$(document).on("click",".close",function(){
	$(".shawdow").hide();
})

//修改信息遮罩层
var username = getCookie("username");
$("#personInfo").click(function(){
	$(".personinfo").show();
})
$(document).on("click","#save",function(){
	
	var userpwd = $("#newpwd").val();
	var surepwd = $("#surepwd").val();
	var usertel = $("#usertel").val();
	if(userpwd==surepwd)
	{
		updatePwd(username,userpwd,usertel);
		$(".personinfo").hide();
	}
	else{
		alert("两次输入的密码不一致!请重新输入");
	}
	
})
$(document).on("click","#cancel",function(){
	$(".personinfo").hide();
})
//注销
$("#logout").click(function(){
	setCookie("username","",-1);
	window.location.href = "../html/login.html";
})
function updatePwd(username,userpwd,usertel){
	$.ajax({
		type:"get",
		url:"../php/updateinfo.php",
		data:`username=${username}&userpwd=${userpwd}&usertel=${usertel}`,
		success:function(data){
			var data = JSON.parse(data);
			console.log(data);
			alert(data["msg"]);
		}
	})
}
}
else{
	window.location.href = "../html/login.html";
}

