$(function(){
	$(".li2").hover(function(){
		$(".div_nav").toggle()
	});
	$(".div_nav").hover(function(){
		$(".div_nav").toggle()
	});
	$(".tankuang_ul>li:nth-child(1)").click(function(){
		$(".tankuang_ul>li:nth-child(1)").addClass("click");
		$(".tankuang_ul :not(:first-child)").removeClass('click')
		$(".tankuang_p").show()
	})
	$(".tankuang_ul>li:nth-child(6)").click(function(){
		$(".tankuang_ul>li:nth-child(6)").addClass("click")
		$(".tankuang_ul :not(:last-child)").removeClass('click')
		$(".tankuang_p6").show();
		$(".tankuang_p").hide()
		$(".tankuang_p5").hide()
		$(".tankuang_p4").hide()
		$(".tankuang_p3").hide()
		$(".tankuang_p2").hide()
	})
	$(".tankuang_ul>li:nth-child(2)").click(function(){
		$(".tankuang_ul>li:nth-child(2)").addClass("click")
		$(".tankuang_ul>li:nth-child(1)").removeClass("click")
		$(".tankuang_ul>li:nth-child(3)").removeClass("click")
		$(".tankuang_ul>li:nth-child(4)").removeClass("click")
		$(".tankuang_ul>li:nth-child(5)").removeClass("click")
		$(".tankuang_ul>li:nth-child(6)").removeClass("click")
		$(".tankuang_p6").show();
		$(".tankuang_p5").hide()
		$(".tankuang_p").hide()
		$(".tankuang_p3").hide()
		$(".tankuang_p2").hide()
		$(".tankuang_p4").hide()
	})
	$(".tankuang_ul>li:nth-child(3)").click(function(){
		$(".tankuang_ul>li:nth-child(3)").addClass("click")
		$(".tankuang_ul>li:nth-child(1)").removeClass("click")
		$(".tankuang_ul>li:nth-child(2)").removeClass("click")
		$(".tankuang_ul>li:nth-child(4)").removeClass("click")
		$(".tankuang_ul>li:nth-child(5)").removeClass("click")
		$(".tankuang_ul>li:nth-child(6)").removeClass("click")
		$(".tankuang_p3").show();
		$(".tankuang_p").hide()
		$(".tankuang_p4").hide()
		$(".tankuang_p2").hide()
		$(".tankuang_p6").hide()
		$(".tankuang_p5").hide()
		$(".tankuang_p3").hide()
	})
	$(".tankuang_ul>li:nth-child(4)").click(function(){
		$(".tankuang_ul>li:nth-child(4)").addClass("click")
		$(".tankuang_ul>li:nth-child(1)").removeClass("click")
		$(".tankuang_ul>li:nth-child(3)").removeClass("click")
		$(".tankuang_ul>li:nth-child(2)").removeClass("click")
		$(".tankuang_ul>li:nth-child(5)").removeClass("click")
		$(".tankuang_ul>li:nth-child(6)").removeClass("click")
		$(".tankuang_p4").show();
		$(".tankuang_p").hide()
		$(".tankuang_p3").hide()
		$(".tankuang_p2").hide()
		$(".tankuang_p5").hide()
		$(".tankuang_p6").hide()
	})
	$(".tankuang_ul>li:nth-child(5)").click(function(){
		$(".tankuang_ul>li:nth-child(5)").addClass("click")
		$(".tankuang_ul>li:nth-child(1)").removeClass("click")
		$(".tankuang_ul>li:nth-child(3)").removeClass("click")
		$(".tankuang_ul>li:nth-child(4)").removeClass("click")
		$(".tankuang_ul>li:nth-child(2)").removeClass("click")
		$(".tankuang_ul>li:nth-child(6)").removeClass("click")
		$(".tankuang_p5").show();
		$(".tankuang_p").hide()
		$(".tankuang_p3").hide()
		$(".tankuang_p2").hide()
		$(".tankuang_p4").hide()
		$(".tankuang_p6").hide()
	});
	$(".input_center1").click(function(){
		$(".tankuang").toggle()
	})
	$(".tankuang_header>img").click(function(){
		$(".tankuang").hide()
	})
// 	$(".car_contents_ul li").click(function(){
// 		$(".car_contents_ul li").css("width":"145px","height":"30px","background-color":"white","font-weight":"bold","color":"aquamarine")
// 	})
	$(".car_contents_ul li").hover(function(){
		$(".car_contents_ul li:nth-child(1)").removeClass("li1")
		$(".car_contents_ul li:nth-child(1)").addClass("li1_1")
		$("i").hide()
	})
	$(".car_contents_ul li").hover(function(){
		$(this).append('<i>周3</i>')
	})
// 	$(".car_contents_ul li").mouseenter(function(){
// 		$(".car_contents_ul li:nth-child(1)").show()
// 	})
	$(".qing").click(function(){
		$(".qing_tankuang").show()
	})
	$(".guan").click(function(){
		$(".qing_tankuang").hide()
	})
	$("table tr:nth-child(1) img").click(function(){
		$('.tr2').toggle()
	})
	$("table tr:nth-child(3) img").click(function(){
		$('.tr1').toggle()
	})
	$(".btn").click(function(){
		$('.goupiao').toggle()
	})
});
