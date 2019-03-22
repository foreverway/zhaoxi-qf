

        var index = 0;
        var timer = null;
        var length = $(".selectImg li").length;
        console.log(length);
            show(index);
        
    $(".selectImg li").mouseover(function () {
            index = $(this).index();
        show(index);
        clearInterval(timer);

    }).mouseout(function () {
            start();
        });
    
    
        start();
    
    function start() {
            clearInterval(timer);
        timer = setInterval(function () {
            index++;
        if (index == length) {
            index = 0;
        }
        show(index)

    }, 2000);
}
        function show(index) {
            //var index = index/2;
            // console.log(index);
        $(".selectImg li").eq(index).addClass("select").siblings().removeClass("select");

    $(".lunbo li").eq(index).fadeIn(500, function () {
            $(this).find("img").eq(0).animate({ "left": 180 }, function () {
                $(this).next().animate({ "left": 180 });
            });
        }).siblings().fadeOut(function () {
            $(this).find("img").css("left", -830);
        });
        }

$(".loginAll").hover(function(){
            $(".loginShadow").css("display", "block");
        },function(){
            $(".loginShadow").css("display", "block");
        });
        
$(".loginShadowP3").click(function(){
            $(".loginShadow").hide();
        });

$(".loginDiv-div-li2").click(function(){
    $(".loginDiv").css("display", "none");
}); 
$(".loginDiv-div-li11").click(function () {
    $(".loginDiv1").css("display", "none");
    $(".loginDiv").css("display", "block");
}); 
$(".loginDiv-div-li1").click(function () {
    $(".loginDiv").css("display", "none");
    $(".loginDiv1").css("display", "block");
});
$(".loginDiv-div-li21").click(function () {
    $(".loginDiv1").css("display", "none");
   
});
$(".loginShadowP1").click(function () {
    $(".loginDiv").show();
});

$(".loginShadowP2").click(function () {
    $(".loginDiv1").show();
});
// $(".#newbtn").click(function () {
    // if($("#newusertel").val()==""){
    //     $(".msg2").show();
    // }
    // if ($("#newuserimg").val() == "") {
    //     $(".msg4").show();
    // }
    // if ($("#newusername").val() == "") {
    //     $(".msg6").show();
    // }
    // if ($("#newuserpwd").val() == "") { $(".msg8").show();}
    // // var tel = /^(1[0-9]{2})+\d{8})$/; 
    // if (!tel.test($("#newusertel").val())) {
    //     $(".msg2").show();
    // } else{
    //     $(".msg1").show();
    // }
// });
// 
$("banner-li").click(function () {
    var id = $(".banner-li").attr("data-id");
    console.log(id);
});
