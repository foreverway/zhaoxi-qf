
function setCookie(key, value, days) {
    if (days) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        document.cookie = key + "=" + value + ";expires=" + date+";path=/";
    } else {
        document.cookie = key + "=" + value;
    }
}

function getCookie(key) {
    var CookieList = document.cookie.split("; ");
    if (CookieList) {
        for (var i = 0; i < CookieList.length; i++) {
            var cookieKey = CookieList[i].split("=")[0];
            var cookieValue = CookieList[i].split("=")[1];
            if (cookieKey == key) {
                return cookieValue;
            }
        }
        return "";
    } else {
        return "";
    }

}


// 动态生成登录的用户
    var username = getCookie("username");
    var usertype = getCookie("location");
    $("#username").html(username);
    $("#usertype").html(usertype);
    // 退出登录
    $("#comeback").on('click', function () {
        setCookie("id", "", -1);
        setCookie("username", "", -1);
        setCookie("location", "", -1);
        setCookie("section", "", -1);
    })

    // 修改个人信息的出现
    $("#personnelinfo").on('click', function () {
        $("#shadow").css("display", "block");
        $("#info").css("display", "block");
    })
    //修改个人密码和手机号
    $(".btn1").on('click', function () {
        var telphone = $("#telphone")[0].value;
        var newpwd = $("#newpwd")[0].value;
        var cfmpwd = $("#cfmpwd")[0].value;
        var telphoneReg = /^1[3-9][0-9]{9}$/g;
        if (newpwd == "" && cfmpwd == "") {
            if (telphoneReg.test(telphone)) {
                updateuserinfo();
            } else if (telphone == "") {
                alert("请输入修改的信息！")
            } else {
                $(".tip3").html("手机号格式不正确");
                $("#p3").css("display", "block");
            }
        } else if (newpwd != "" && cfmpwd == "") {
            if (telphone != "" && !telphoneReg.test(telphone)) {
                $(".tip3").html("手机号格式不正确");
                $("#p3").css("display", "block");
            }
            $(".tip2").html("请确认新密码");
            $("#p2").css("display", "block");
        } else {
            if (newpwd == cfmpwd) {
                if (telphone != "" && !telphoneReg.test(telphone)) {
                    $(".tip3").html("手机号格式不正确");
                    $("#p3").css("display", "block");
                } else {
                    updateuserinfo();
                }
            } else {
                if (telphone != "" && !telphoneReg.test(telphone)) {
                    $(".tip3").html("手机号格式不正确");
                    $("#p3").css("display", "block");
                }
                $(".tip1").html("两次密码填写不相同");
                $("#p1").css("display", "block");
                $(".tip2").html("两次密码填写不相同");
                $("#p2").css("display", "block");
            }
        }
    })
    //关闭修改页面
    $(".info-a2").on('click', function () {
        closeupdateuserinfo()
    })
    $(".btn2").on('click', function () {
        closeupdateuserinfo()
    })

    //    关闭修改信息页面
    function closeupdateuserinfo() {
        $("#shadow").css("display", "none");
        $("#info").css("display", "none");
        $("#newpwd")[0].value = "";
        $("#cfmpwd")[0].value = "";
        $("#telphone")[0].value = "";
        $("#p1").css("display", "none");
        $("#p2").css("display", "none");
        $("#p3").css("display", "none");
    }
    //   修改个人信息
    function updateuserinfo() {
        $.ajax({
            type: "get",
            url: "../php/updateuserinfo.php",
            dataType: "json",
            data: {
                username: getCookie("username"),
                usertel: $("#telphone")[0].value,
                userpwd: $("#newpwd")[0].value
            },
            success: function (obj) {
                if (obj["code"] == 1) {
                    alert(obj["msg"]);
                    closeupdateuserinfo();
                } else {
                    alert(obj["msg"]);
                }
            }
        })
    }

    