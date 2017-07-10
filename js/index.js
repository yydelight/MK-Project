//头部黑色条点击＋触发事件
$(function(){
	$("#plusIcon").click(function(){
		$("#showTopTips").slideDown(500);
	})
	$("#closeIcon").click(function(){
		$("#showTopTips").slideUp(500);
	})
//联系我们hover下拉框
$(".nav-contact").hover(function(){
	$(".contactUs").slideDown(700);
},function(){
	$(".contactUs").slideUp(500);
})
//登录hover下拉框
$(".nav-login").hover(function(){
	$(".Line").css("width","27px");
	$(".loginDiv").slideDown(700);
},function(){
	$(".Line").css("width","0px");
	$(".loginDiv").slideUp(500);
})
//购物袋hover下拉框
$(".nav-shopbag").hover(function(){
	$(".bagDiv").slideDown(700);
},function(){
	$(".bagDiv").slideUp(500);
})
//轮播点击播放
$(".smallVideo").click(function(){
	$(".LongVideo").css("z-index","2");
	document.getElementById("LongVideo").play();
})
//鼠标滚动隐藏顶部黑色条并固定导航条
$(window).scroll(function (){
		var st = $(this).scrollTop();
		console.log(st)
		if(st > 36){
			$("#TopTips").hide();
			$("#fixNav").addClass("navbar-fixed-top");
			$(".brandHeader").hide();
			$(".brandSmallHeader").css("display","block");
			$(".smallNav").css("position","fixed");
			var h = (st+93-36)+"px";
			$(".smallNavWrap").css("top",h);	
			if(st > 260){
				$(".topTop").fadeIn();
			}else{
				$(".topTop").fadeOut();
			}
			
			if(st > 310){
				$(".ptrGoodsDetails").css({"position":"fixed","left":"51%","top":"auto","bottom":"40px"});
				if(st > 3226){
					$(".ptrCircleDot ul").css("display","none");
					$(".ptrGoodsDetails").css({"position":"relative","left":"0","top":"0","bottom":"0"});
				}else{
					$(".ptrCircleDot ul").css("display","block");	
				}
			}else{
				$(".ptrGoodsDetails").css({"position":"relative","left":"0","top":"0","bottom":"0"});
			}
		}
		else{
			$("#TopTips").show();
			$("#fixNav").removeClass("navbar-fixed-top");
			$(".brandHeader").show();
			$(".brandSmallHeader").hide();
			$(".smallNav").css("position","relative");
			var s = (st+93)+"px";
			$(".smallNavWrap").css("top",s);
			$(".topTop").fadeOut();
			$(".ptrCircleDot ul li:first-child").addClass("active");
			$(".ForTwoBtn").css("width","top: 37%");
		}
});
//点击搜索框
$(".searchInput").click(function(){
	$(".searchInput").animate({
		width:'305px'
	},200)
//	$(".searchInput").css("width","305px");
	$(".searchInput").attr({"placeholder":"请输入您想要输入的内容"});
})
$(".searchInput").bind("click",function(event){
    var e=window.event || event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
});
$(document).bind("click",function(event){
    var e=window.event || event;
    if(e.which == 1) {
		$(".searchInput").animate({
			width:'160px'
		},200)
		$(".searchInput").attr({"placeholder":"搜索"});
    }
});


//smallIndex的js
var m = true;
$(".navIcon").click(function(){
	console.log(m)
	if(m==true){
		m = false;
		$("body").css("overflow","hidden");
		$(".smallNavWrap").css("display","block");
		$(".smallNavWrap").animate({
			left:'0'
		});
		$(this).addClass("closeIcon");
	}
	else{
		m = true;
		$("body").css("overflow","scroll");
		$(".smallNavWrap").animate({
			left:'-100%'
		},function(){
			$(".smallNavWrap").css("display","none");
		});
		$(this).removeClass("closeIcon");
	}
})
window.onresize=resizeBannerImage;//当窗口改变宽度时执行此函数
function resizeBannerImage(){
    if( $(window).width() > 1024 ) {
		$(".smallNavWrap").css("display","none");
		$(".navIcon").removeClass("closeIcon");
		m = 0;
    }
}
//脚部小导航
var m=0
$(".us>a>span").each(function(){
	$(this).click(function(){
//		alert("这是"+$(this).html());
		if($(this).hasClass('glyphicon-minus')){
			$(this).parents('.us').nextAll().css("display","none");
			$(this).removeClass("glyphicon-minus");
		}
		else{
			$(this).parents('.us').nextAll().css("display","block");
			$(this).addClass("glyphicon-minus");
		}
				
	});
});

//导航条hover
$(".navTwoLi").hover(function(){	
	$(".hoverLine").css("width","0px");
	var w = $(this).width();
	$(this).children().eq(1).animate({
		width:w
	},100)
	$(this).children().eq(2).slideDown(500)
},function(){
	$(this).children().eq(1).animate({
		width:"0px"
	},100)
	$(this).children().eq(2).css("display","none");
})

//输入框没输入时提示
$(".loginDiv>form>input").focus(function() {
	$(this).css("box-shadow","0 0 5px #ccc");
}
);
$(".loginDiv>form>input").blur(function() {
	$(this).css("box-shadow","none");
	var pla = $(this).attr("placeholder");
	var val = $(this).val();
	console.log(pla+val.length)
	if(val== ""){
		$(this).css("border-color","red");
		$(this).next().show();
	}else if(pla == "请输入您的手机号码" && val.length < 11 || val.length > 11){
		$(this).next().text("请输入11位正确手机号码");
	}else if(pla == "请输入密码" && val.length < 6){
		$(this).next().text("密码长度不能少于6位");
	}else{
		$(this).css("border-color","#CCCCCC");
		$(this).next().hide();
	}
}
);

//注册页的输入提示
//输入框没输入时提示
$(".regInput>input").focus(function() {
	$(this).css("box-shadow","0 0 5px #ccc");
}
);
$(".regInput>div>input").focus(function() {
	$(this).css("box-shadow","0 0 5px #ccc");
}
);
$(".regNum>div>input").blur(function() {
	$(this).css("box-shadow","none");
	var pla = $(this).attr("placeholder");
	var val = $(this).val();
	if(val== ""){
		$(this).css("border","1px solid red");
		$(this).next().show();
	}else{
		$(this).css("border","1px solid #CCCCCC");
		$(this).next().hide();
	}
})
$(".regInput>input").blur(function() {
	$(this).css("box-shadow","none");
	var pla = $(this).attr("placeholder");
	var val = $(this).val();
	console.log(pla+val.length)
	if(val== ""){
		$(this).css("border","1px solid red");
		$(this).next().text("请输入您的手机号码");
		$(this).next().show();
	}else if(pla == "请输入11位手机号码" && val.length < 11 || val.length > 11){
		$(this).next().text("请输入11位正确手机号码");
		$(this).next().show();
	}else{
		$(this).css("border","1px solid #CCCCCC");
		$(this).next().hide();
	}
}
);

//第二页的js
//点击尺码变化li颜色
$(".ptSize div ul li").click(function(){
	if($(this).children("a").css("color") == "rgb(0, 0, 0)"){
		$(this).children("a").css({"background-color":"black","color":"white"});
	}
	else{
		$(this).children("a").css({"background-color":"white","color":"black"});
	}
}
)
//hover颜色显示颜色文字
$(".ptColor div ul li a").hover(function(){
	var color = $(this).prev().html();
	$(".ptColor div h6").html(color);
},function(){
	$(".ptColor div h6").html("");
})
//点击颜色时border是黑色
$(".ptColor div ul li a").click(function(){
	$(this).css("border-color","black");
})
//左边的导航条
var m=0
$(".size>a>span").each(function(){
	$(this).click(function(){
		console.log(66666);
		if($(this).hasClass('glyphicon-minus')){
			$(this).parents('.size').nextAll().css("display","none");
			$(this).toggleClass("glyphicon-minus glyphicon-plus");
		}
		else{
			$(this).parents('.size').nextAll().css("display","block");
			$(this).toggleClass("glyphicon-minus glyphicon-plus");
		}
				
	});
});
//hover照片变换另一张
$(".ptImgul li a img:nth-child(2)").each(function(){
	$(this).hover(function(){
		console.log($(this).attr("src"))
		$(this).css("display","none");
		$(this).next().css("display","block");
		$(this).next().next().css("display","block");
		$(this).prev().css("display","block");
	})
})
$(".ptImgul li a img:nth-child(3)").each(function(){
	$(this).hover(function(){
	},function(){
		$(this).css("display","none");
		$(this).prev().prev().css("display","none");
		$(this).prev().css("display","block");
		$(this).next().css("display","none");
	})
})
//点击视图2 4 变换
$(".ptNav span a:nth-child(1)").click(function(){
	$(".ptImgul li").css("width","50%");
	$(this).css("color","#000");
	$(this).next().css("color","#707070");
	$(".ptImgul li a span").css("width","94%");
})
$(".ptNav span a:nth-child(2)").click(function(){
	$(".ptImgul li").css("width","25%");
	$(this).css("color","#000");
	$(this).prev().css("color","#707070");
	$(".ptImgul li a span").css("width","88%");
})
//默认排序
$(".ptSortBig a").click(function(){
	$(".ptSortDiv").css("display","block");
})
$(".ptSortBig a").bind("click",function(event){
    var e=window.event || event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
});
$(document).bind("click",function(event){
    var e=window.event || event;
    if(e.which == 1) {
		$(".ptSortDiv").css("display","none");	
    }
});
//响应式
var sort=$(".ptSortBig .ptSortDiv").html();
var li=$(".ptLeftPart .ptSelect").html();
var list=$(".ptLeftPart .ptCategory").html();
$(".ptSelectDrop .ptSortTwo").append(sort);
$(".ptSelectDrop .ptSelect").append(li);
$(".ptRightPart .ptNewList .ptCategory").append(list);
$(".ptSelectTitle").click(function(){
	$(".ptSelectDrop").css("display","block");
	$("#fixNav").css("display","none");
	$("body").css("overflow","hidden");
})
$(".ptSelectDrop").click(function(){
	$("#fixNav").css("display","block");
	$(".ptSelectDrop").css("display","none");
	$("body").css("overflow","scroll");
})
var m=true;
$(".ptRightPart h5").click(function(){
	if(m){
		$(".ptRightPart .ptDownIcon").css("background-image","url(img/icon/上.png)");
		$(".ptNewList").slideDown(500);
		m=false;
	}else{
		$(".ptRightPart .ptDownIcon").css("background-image","url(img/icon/下拉.png)");
		$(".ptNewList").slideUp(500);
		m=true;		
	}
})

//快速浏览模态框
$(".ptSmallMP img").click(function(){
	$(".ptSmallMP img").removeClass("ptOc");
	$(this).addClass("ptOc");
	var s = $(this).attr("src");
	$(".ptBigMP img").attr({"src":s});
})
//第二页js结束



//第三页js
//点开放大看大图
$(".ptrModelPic img").click(function(){
	$(".ptrImgBigPic").css("display","block");
	$("body").css("overflow","hidden");
})
$(".ptrImgBigPic").click(function(){
	$(".ptrImgBigPic").css("display","none");
	$("body").css("overflow","scroll");
})
//缩小后点开放大看大图
$(".ptrBigPicIcon").click(function(){
	$(".ptrImgBigPic").css("display","block");
	$("body").css("overflow","hidden");
})
$(".ptrImgBigPic").click(function(){
	$(".ptrImgBigPic").css("display","none");
	$("body").css("overflow","scroll");
})
//第三页js结束

//第四页js
//缩小后的导航的hover
$(".ForTNul li").hover(function(){
	$(this).children(".ForDropList").slideDown(500);
	$(this).children(".ForLine").animate({
		width:"100%"
	},500)
},function(){
	$(this).children(".ForDropList").slideUp();
	$(this).children(".ForLine").animate({
		width:"0"
	},10)
})
//点击导航出现
var c=true;
$(".ForSmallNav a").click(function(){
	if(c){
		$(".ForSmallNav .ptDownIcon").css("background-image","url(img/icon/上.png)");
		$(".ForSNDropList").slideDown(500);
		c=false;
	}else{
		$(".ForSmallNav .ptDownIcon").css("background-image","url(img/icon/下拉.png)");
		$(".ForSNDropList").slideUp(500);
		c=true;		
	}
})

})

