$("#btn").click(function(){
	var username = $("#username").val();
	var userpwd = $("#userpwd").val();
$.ajax({
	type:"get",
	url:`../php/login.php`,
	data:`username=${username}&userpwd=${userpwd}`,
	success:function(data){
		var obj = JSON.parse(data)
		alert(obj["msg"]+obj["usertype"]);

		//根据用户类别跳转道不同的页面
		switch(obj["usertype"]*1)
		{
			case 1:
			window.location.href = "../html/administer.html";
			setCookie("username",`${$("#username").val()}`,7);
			break;
			case 2:
			window.location.href = "../html/kaoqinguanli.html";
setCookie("username",`${$("#username").val()}`,7);
			break;
			case 3:
			window.location.href = "../html/worklist.html";
			break;
		}
	}
})
})





