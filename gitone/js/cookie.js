function setCookie(key, value, days, path = "/") {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + date + ";path=" + path;
}

function getCookie(key) {
    var cookie = document.cookie;
    if (cookie) {
        var cookieList = cookie.split("; ");
        for (var i = 0; i < cookieList.length; i++) {
            var item = cookieList[i].split("=");
            var itemKey = decodeURIComponent(item[0]);
            if (itemKey == key) {
                return decodeURIComponent(item[1]);
            }
        }
        return "";
    } else {
        return "";
    }
}