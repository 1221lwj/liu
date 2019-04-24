window.onload = function(){
	 var mySwiper = new Swiper ('.swiper-container', {
	   loop: true, // 循环模式选项
	   // 如果需要分页器
	   pagination: {
	     el: '.swiper-pagination',
	   }
	 })        
};
$(function(){
	$(".li2").hover(function(){
		$(".div_nav").toggle()
	});
	$(".div_nav").hover(function(){
		$(".div_nav").toggle()
	})
	$(".p1").click(function(){
		$(".r_contents").show();
		$("nav").toggle();
		$(".c_right").hide()
		$(".r_contents2").hide()
		$(".r_contents3").hide()
		$(".r_contents4").hide()
	});
	$(".r_ul_li2").click(function(){
		$(".r_contents2").show()
		$(".r_contents").hide()
		$(".r_contents3").hide()
		$(".r_contents4").hide()
	});
	$(".r_ul_li3").click(function(){
		$(".r_contents3").show()
		$(".r_contents").hide();
		$(".r_contents2").hide();
		$(".r_contents4").hide()
	});
	$(".r_ul_li4").click(function(){
		$(".r_contents4").show()
		$(".r_contents").hide();
		$(".r_contents2").hide();
		$(".r_contents3").hide()
	});
	
	$(".p2").click(function(){
		$(".nav2").toggle();
		$(".c_contents1").show();
		$(".r_contents").hide();
		$(".c_contents2").hide();
		$(".c_contents3").hide()
		$(".c_contents4").hide()
		
		$(".r_contents2").hide();
		$(".r_contents3").hide()
		$(".r_contents4").hide()
	});
	$(".nav2>ul>li:nth-child(2)").click(function(){
		$(".nav2").show();
		$(".c_contents2").show()
		$(".c_contents1").hide()
		$(".c_contents3").hide()
		$(".c_contents4").hide()
	});
	$(".nav2>ul>li:nth-child(3)").click(function(){
		$(".c_contents2").hide();
		$(".c_contents4").hide();
		$(".c_contents1").hide();
		$(".c_contents3").show()
		$(".nav2").show();
	});
	$(".nav2>ul>li:nth-child(4)").click(function(){
		$(".c_contents2").hide();
		$(".c_contents1").hide();
		$(".c_contents3").hide()
		$(".nav2").show();
		$(".c_contents4").show()
	});
});