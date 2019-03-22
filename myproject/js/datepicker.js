   
     Date.prototype.dateFormat = function (str) {
        var year = this.getFullYear();
        var month = this.getMonth() + 1;
        var day = this.getDate();
        return str.replace("yyyy", year).replace("mm", month).replace("dd", day);

    }
   
   //获取指定时间的的月份的天数
   Date.prototype.getMonthTotal = function () {
    var tempDate = new Date("2000-01-01"); //每个月份都有第一天  并不是都有29  30  31
    tempDate.setFullYear(this.getFullYear()) //2019-01-01
    tempDate.setMonth(this.getMonth() + 1); //2019-04-01
    tempDate.setDate(0); //2019-3-31
    return tempDate.getDate(); //返回时间的天数
}
//获取指定时间的上一个月的天数
Date.prototype.getPrevMonthTotal = function () {
    var tempDate = new Date("2000-01-01"); //每个月份都有第一天  并不是都有29  30  31
    tempDate.setFullYear(this.getFullYear()) //2019-01-01
    tempDate.setMonth(this.getMonth()); //2019-03-01
    tempDate.setDate(0); //2019-2-8
    return tempDate.getDate(); //返回时间的天数
}
//获取指定时间的月份的第一天是星期几
Date.prototype.getMonthFirstDayWeek = function () {
    var tempDate = new Date("2000-01-01"); //每个月份都有第一天  并不是都有29  30  31
    tempDate.setFullYear(this.getFullYear()) //2019-01-01
    tempDate.setMonth(this.getMonth()); //2019-03-01
    return tempDate.getDay();
}
//耦合
function DatePicker(ele, json) {
    var that = this;
    this.date = new Date(); //默认就是系统的当前时间
    this.dateFormat = "yyyy-mm-dd"; //默认格式
    this.target = document.querySelector(ele);
    this.extend(json); //用传来的参数 替换掉默认的
    this.target.onclick = function (e) {
        //点击以后  变成日历
        that.create(); //生成主体结构
        that.bindData(); //绑定数据
        that.bindEvent(); //绑定事件
        var evt = window.event || e;
        evt.stopPropagation();

    }
}
DatePicker.prototype.extend = function (json) {
    for (var attr in json) {
        if (attr == "date") {
            this.date = new Date(json[attr]);
        } else {
            this[attr] = json[attr];
        }

    }

}

DatePicker.prototype.bindEvent = function () {
    var that = this;
    this.nextBtn.onclick = function (e) {
        that.date.setMonth(that.date.getMonth() + 1);
        that.bindData();
        var evt = window.event || e;
        evt.stopPropagation();
    }
    this.prevBtn.onclick = function (e) {
        that.date.setMonth(that.date.getMonth() - 1);
        that.bindData();
        var evt = window.event || e;
        evt.stopPropagation();
    }

    // document.onclick = function () {
    //     that.hide();
    // }
    document.addEventListener("click", function () {
        that.hide();
    })
}

DatePicker.prototype.bindData = function () {
    var that = this;
    //上（上一月）   中 (当前月)  下(下一个月)
    //三个方法 分别获取当前月有多少天  当前月的第一天是星期几  上一个月有多少天
    var currentDays = this.date.getMonthTotal(); //当前月有多少天
    var prevDays = this.date.getPrevMonthTotal(); //上一个月有多少天
    var firstDayWeek = this.date.getMonthFirstDayWeek(); //获取当前月的第一天是星期几
    firstDayWeek = firstDayWeek == 0 ? 7 : firstDayWeek;

    this.tbody.innerHTML = "";

    for (var i = prevDays - firstDayWeek + 2; i <= prevDays; i++) {
        var li = document.createElement("li");
        li.innerHTML = i;
        this.tbody.appendChild(li);
        var prevDate = new Date("2000-1-1"); //重新声明一个时间
        prevDate.setFullYear(this.date.getFullYear());
        prevDate.setMonth(this.date.getMonth() - 1);
        prevDate.setDate(i);
        li.showDate = prevDate.dateFormat(this.dateFormat);
        li.onclick = function () { //点击的时候显示
            that.target.value = this.showDate;
            that.hide();
        }
    }
    for (var i = 1; i <= currentDays; i++) {
        //都是上一个月的时间
        var li = document.createElement("li");
        li.innerHTML = i;
        this.tbody.appendChild(li);
        var currentDate = new Date();
        currentDate.setFullYear(this.date.getFullYear());
        currentDate.setMonth(this.date.getMonth());
        currentDate.setDate(i);
        li.showDate = currentDate
        li.onclick = function () { //点击的时候显示
            that.target.value = this.showDate.dateFormat(that.dateFormat);
            that.hide();
        }
    }
    for (var i = 1; i <= (42 - currentDays - firstDayWeek + 1); i++) {
        var li = document.createElement("li");
        li.innerHTML = i;
        this.tbody.appendChild(li);
        var nextDate = new Date("2000-1-1"); //重新声明一个时间
        nextDate.setFullYear(this.date.getFullYear());
        nextDate.setMonth(this.date.getMonth() + 1);
        nextDate.setDate(i);
        li.showDate = nextDate.dateFormat(this.dateFormat);
        li.onclick = function () { //点击的时候显示
            that.target.value = this.showDate;
            that.hide();
        }
    }

    this.middle.innerHTML = this.date.dateFormat("yyyy年mm月")




}
DatePicker.prototype.show = function () {
    this.datepickercontent.style.display = "block";
}
DatePicker.prototype.hide = function () {
    this.datepickercontent.style.display = "none";
}

DatePicker.prototype.create = function () {
    if (this.datepickerbox) {
        this.show();
    } else { //没有创建
        this.datepickerbox = document.createElement("div");
        this.datepickerbox.className = "datepicker-box";
        this.datepickerbox.style.width = this.target.offsetWidth + "px";
        this.datepickerbox.style.height = this.target.offsetHeight + "px";
        // this.datepickerbox.style.border = "1px solid red";
        this.target.parentNode.insertBefore(this.datepickerbox, this.target);
        this.datepickerbox.appendChild(this.target);


        this.datepickercontent = document.createElement("div");
        this.datepickercontent.className = "datepicker-content";
        this.datepickercontent.style.top = this.target.offsetHeight + 4 + "px";
        this.datepickerbox.appendChild(this.datepickercontent);

        this.datepickerheader = document.createElement("div");
        this.datepickerheader.className = "datepicker-header";
        this.datepickercontent.appendChild(this.datepickerheader);


        this.prevBtn = document.createElement("span");
        this.prevBtn.className = "datepicker-prev";
        this.prevBtn.innerHTML = "上";
        this.datepickerheader.appendChild(this.prevBtn);


        this.middle = document.createElement("span");
        this.middle.className = "datepicker-middle";
        this.middle.innerHTML = "2019-3";
        this.datepickerheader.appendChild(this.middle);


        this.nextBtn = document.createElement("span");
        this.nextBtn.className = "datepicker-next";
        this.nextBtn.innerHTML = "下";
        this.datepickerheader.appendChild(this.nextBtn);


        this.datepickerth = document.createElement("ul");
        this.datepickerth.innerHTML =
            ` <li>一</li>
                                    <li>二</li>
                                    <li>三</li>
                                    <li>四</li>
                                    <li>五</li>
                                    <li>六</li>
                                    <li>日</li>`;
        this.datepickerth.className = "datepicker-th";
        this.datepickercontent.appendChild(this.datepickerth);


        this.tbody = document.createElement("ul");
        this.tbody.className = "datepicker-th";
        this.datepickercontent.appendChild(this.tbody);


    }

}