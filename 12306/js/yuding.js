$(function(){
	$(".li2").hover(function(){
		$(".div_nav").toggle()
	});
	$(".div_nav").hover(function(){
		$(".div_nav").toggle()
	});
	$('.tijiao').click(function(){
		$(".buy_info").show()
		// $('.tanceng').addClass("tanceng")
	})
	$(".fanhui").click(function(){
		$(".buy_info").hide()
	})
})