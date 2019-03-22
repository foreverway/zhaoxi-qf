
    $.ajax({
        type: "get",
        url: "http//b-c3kgxojdz94ns3.bch.rds.gz.baidubce.com/php/goodinfo.php",
        data: `id=${id}`,
        success: function (list) {
            var list = JSON.parse(list);
            var html = "";
            list.forEach(function (item) {
                var {
                    bookname,
                    witer,
                    price,
                    bookimg,
                    bookstore1,
                     bookstore2,
                      bookstore3,
                      bookmsg
                } = item;
                $(".bookname").replaceWith(bookname);
                 $(".witer").replaceWith(witer);
                 $(".price").replaceWith(price);
                    $(".bookimg").src(bookimg);
                html +=
                    ` <li>
                <img  width="60" height="80" src="${bookimg}">
                <ul class="goodlist-ul-ul">
                    <li class="bookname">${bookname}</li>
                    <li>九五品</li>
                    <li>蒙奇奇的书架的书摊 
                    上海市奉贤区
                    </li>
                    <li>${price}</li>
                    <li>加入购物车</li>
                </ul>
            </li>`;
            });
            $(".goodlist-ul").append(html);
        },
    });

// $(".shoppngshow").cilck(function(){
//     document.location.href = "shoppingcar.html?id=" + id;
// })
// $(".shopping").cilck(function(){
//     $("this")
        //  document.location.href ="html/goodinfo.html?id="+id
// })