function Page(ele,json){
	this.target = document.querySelector(ele);
	this.pageIndex=1;
	this.option = {
			dataNum:100,//数据的总数
			showPage:5,//显示几个页码
			showNum:6,//每页显示的数据条数
			callBack:function(){

			}
		}
		this.extend(json);
		this.create();
		this.bindData();
	}

	Page.prototype.extend = function(json){
		Object.assign(this.option,json);
	}

	Page.prototype.bindEvent = function(){
		var that = this;
		this.pre_page.className = "";
		this.pre_page.onclick = function(){
			that.pageIndex--;
			that.bindData();
			
		}
		this.next_page.className = "";
		this.next_page.onclick = function(){
			that.pageIndex++;
			that.bindData();
		}
		if (this.option["callBack"]) {
			this.option["callBack"](this.pageIndex);
		}

	}


	Page.prototype.bindData = function(){
		var that = this;

		var middleNum = Math.floor(this.option["showPage"]/2);
		var MaxpageNum = Math.ceil(this.option["dataNum"]/this.option["showNum"]);//最大页码数
		var start = 1;
		var end = MaxpageNum<this.option["showPage"] ? MaxpageNum:this.option["showPage"] ;

		start = this.pageIndex>middleNum?this.pageIndex - middleNum:start;
		end = this.pageIndex>middleNum?this.pageIndex + middleNum :end;
		if (this.pageIndex > MaxpageNum - middleNum) {
            start = MaxpageNum - 2 * middleNum; //20-6
            end = MaxpageNum;
        }

        start = start < 1 ? 1 : start;//限制最小值


        this.content.innerHTML = "";
        for(var i=start;i<=end;i++)
        {
        	var li = document.createElement("li");
        	li.innerHTML = i;
        	if(this.pageIndex==i)
        	{
        		li.className = "selected";
        	}

        	this.content.appendChild(li);
        	li.onclick = function(){
        		that.pageIndex = this.innerHTML*1;
        		that.bindData();
        	}
        }
			this.bindEvent();//绑定事件

			if(this.pageIndex==1)
			{
				this.pre_page.onclick = null;
				this.pre_page.className = "disabled";
			}
			if(this.pageIndex==MaxpageNum)
			{
				this.next_page.onclick = null;
				this.next_page.className = "disabled";
			}



		}

		Page.prototype.create = function(){
			this.pre_page = document.createElement("span");
			this.pre_page.className = "page-prev";
			this.pre_page.innerHTML = this.option["pre"] ;
			this.target.appendChild(this.pre_page);


			this.content = document.createElement("ul");
			this.content.className = "page-content";
			this.target.appendChild(this.content);

			this.next_page = document.createElement("span");
			this.next_page.className = "page-next";
			this.next_page.innerHTML = this.option["next"] 
			this.target.appendChild(this.next_page);
		}


		getNum();
		//从数据库获取数据总数
		function getNum(){
			$.ajax({
				type:"get",
				url:"../php/fenye2.php",
				success:function(data){
					var data = JSON.parse(data);
					var num = data["count"];
					initPage(num);
				}
			});	
		}
		//初始化分页
		function initPage(dataTotal){
			new Page("#box",{
			dataNum:dataTotal,//数据的总数
			showPage:7,//显示几个页码
			showNum:10,//每页显示的数据条数
			pre:"pre",
			next:"next",
			callBack: function (pageIndex) {
				fenyeSetData((pageIndex-1)*10,10);
			}
		});
		}

		//分页数据渲染
		function fenyeSetData(skip,show){
			
			qingjiashenpi(skip,show);
		}

		