$("#btn").click(function(){
    var usernameopt =$("#username").val();
    var userpwdopt  =$("#userpwd").val();
    //  console.log(userpwd)
    $.ajax({
        type:"get",
        url: "php/login.php",
        // url:"http://localhost/gitone/php/login.php",
        data: {username:usernameopt,userpwd:userpwdopt},
        dataType:"json",
        success:function(list){
            if (list["code"]==1) {
               setCookie("username",`${$("#username").val()}`,7);
                $(".loginDiv").hide();
                 $(".personmsg").replaceWith(usernameopt);
                alert("欢迎您回来，" + usernameopt);
                }else{
                    alert("输入有误");
                }
                   }
            })
    })

    $("#newbtn").click(function () {
              //校验密码：只能输入6-12个字母、数字、下划线 
              var patrn = /^\D{6,12}$/;
              if (patrn.test($("#newuserpwd").val())) {
                   $(".msg7").css("opacity", "1")
                   $(".msg8").css("opacity", "0")
                 }else{
                     $(".msg8").css("opacity", "1")
                      $(".msg7").css("opacity", "0")
                 }
            /*用户名校验：只能输入4-20个以字母开头、可带数字、“_”、“.”的字串  */
            var name = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){3,19}$/;
            if (name.test($("#newusername").val())) {
                $(".msg5").css("opacity", "1")
                 $(".msg6").css("opacity", "0")
            }else{
                $(".msg5").css("opacity", "0")
                 $(".msg6").css("opacity", "1")
            }
               /*  验证130-139,150-159,180-189号码段的手机号码 */
               var myreg = /^((1[0-9]{2})+\d{8})$/;
               if (myreg.test($("#newusertel").val())) {
                   $(".msg1").css("opacity", "1")
                    $(".msg2").css("opacity", "0")
               }else{
                   $(".msg1").css("opacity", "0")
                   $(".msg2").css("opacity", "1")
               }
if ((patrn.test($("#newuserpwd").val()))&(myreg.test($("#newusertel").val())) &(name.test($("#newusername").val()))){
        var usernameopt1 = $("#newusername").val();
        var userpwdopt1 = $("#newuserpwd").val();
        var userpwdtel = $("#newusertel").val();
     $.ajax({
         type: "get",
     //url: "http://localhost/gitone/php/regisrter.php",
         url: "php/regisrter.php",
         data: {
             newusername: usernameopt1,
             newuserpwd: userpwdopt1,
             newusertel: userpwdtel
         },
         dataType: "json",
           success: function (list) {
           if (list["code"] == 1) {
               alert(list["msg"] );
                   $(".loginDiv1").hide();
           } else {
               alert(list["msg"]);
           }
           }
           })
     }
    })
         

     