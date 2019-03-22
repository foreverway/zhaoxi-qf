var $ = {
    ajax: function (json) {
        //"php/list.php?key=&order=id&paixu=asc&skipnum=0&shownum=3&",自动拼接
        var url = json.url; //php/list.php
        if (json.data) { //有参数就拼接  没有就不管
            url += "?"; //php/list.php?
            for (var i in json.data) { //循环该对象
                url += i + "=" + json.data[i] + "&"; //php/list.php?key=""&order=id&
            }
            url = url.substring(0, url.length - 1);
        }

        var xhr = new XMLHttpRequest();
        xhr.open(json.type, url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    let result = xhr.responseText;
                    let list = JSON.parse(result);
                    if (json.dataType == "json") {
                        result = JSON.parse(result);
                    }
                    json["success"](result);

                } catch (e) {
                    if (json["error"]) {
                        json["error"](e);
                    }
                }
            }
        }
    }
}