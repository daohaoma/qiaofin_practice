//给产品介绍设置点击事件
$('.first').on('click',function(){
	$('.first').css('background-color','rgb(80,93,169)')
	$('.dian').css('background-color','rgb(230,231,239)')
	$('.di').css('background-color','rgb(230,231,239)')
	$('.long').css('background-color','rgb(230,231,239)')
	$('.er').css('background-color','rgb(230,231,239)')
	$('.xin').css('background-color','rgb(230,231,239)')
	//小三角形颜色
	$('.bot:eq(0)').css('border-top','8px rgb(80,93,169) solid')
	$('.bot:eq(1)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(2)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(3)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(4)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(5)').css('border-top','8px rgb(247,247,247) solid')
	//模块显示和隐藏
	$('.main-box:eq(0)').css('display','block')
	$('.main-box:eq(1)').css('display','none')
	$('.main-box:eq(2)').css('display','none')
	$('.main-box:eq(3)').css('display','none')
	$('.main-box:eq(4)').css('display','none')
	$('.main-box:eq(5)').css('display','none')
})

$('.dian').on('click',function(){
	$('.dian').css('background-color','rgb(80,93,169)')
	$('.first').css('background-color','rgb(230,231,239)')
	$('.di').css('background-color','rgb(230,231,239)')
	$('.long').css('background-color','rgb(230,231,239)')
	$('.er').css('background-color','rgb(230,231,239)')
	$('.xin').css('background-color','rgb(230,231,239)')
	//小三角形颜色
	$('.bot:eq(1)').css('border-top','8px rgb(80,93,169) solid')
	$('.bot:eq(0)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(2)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(3)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(4)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(5)').css('border-top','8px rgb(247,247,247) solid')
	//模块显示和隐藏
	$('.main-box:eq(1)').css('display','block')
	$('.main-box:eq(0)').css('display','none')
	$('.main-box:eq(2)').css('display','none')
	$('.main-box:eq(3)').css('display','none')
	$('.main-box:eq(4)').css('display','none')
	$('.main-box:eq(5)').css('display','none')
})

$('.di').on('click',function(){
	$('.di').css('background-color','rgb(80,93,169)')
	$('.dian').css('background-color','rgb(230,231,239)')
	$('.first').css('background-color','rgb(230,231,239)')
	$('.long').css('background-color','rgb(230,231,239)')
	$('.er').css('background-color','rgb(230,231,239)')
	$('.xin').css('background-color','rgb(230,231,239)')
	
	//小三角形颜色
	$('.bot:eq(2)').css('border-top','8px rgb(80,93,169) solid')
	$('.bot:eq(1)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(0)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(3)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(4)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(5)').css('border-top','8px rgb(247,247,247) solid')
	
	//模块显示和隐藏
	$('.main-box:eq(2)').css('display','block')
	$('.main-box:eq(1)').css('display','none')
	$('.main-box:eq(0)').css('display','none')
	$('.main-box:eq(3)').css('display','none')
	$('.main-box:eq(4)').css('display','none')
	$('.main-box:eq(5)').css('display','none')
})

$('.long').on('click',function(){
	$('.long').css('background-color','rgb(80,93,169)')
	$('.dian').css('background-color','rgb(230,231,239)')
	$('.di').css('background-color','rgb(230,231,239)')
	$('.first').css('background-color','rgb(230,231,239)')
	$('.er').css('background-color','rgb(230,231,239)')
	$('.xin').css('background-color','rgb(230,231,239)')
	//小三角形颜色
	$('.bot:eq(3)').css('border-top','8px rgb(80,93,169) solid')
	$('.bot:eq(1)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(2)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(0)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(4)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(5)').css('border-top','8px rgb(247,247,247) solid')
	
	//模块显示和隐藏
	$('.main-box:eq(3)').css('display','block')
	$('.main-box:eq(1)').css('display','none')
	$('.main-box:eq(2)').css('display','none')
	$('.main-box:eq(0)').css('display','none')
	$('.main-box:eq(4)').css('display','none')
	$('.main-box:eq(5)').css('display','none')
})

$('.er').on('click',function(){
	$('.er').css('background-color','rgb(80,93,169)')
	$('.dian').css('background-color','rgb(230,231,239)')
	$('.di').css('background-color','rgb(230,231,239)')
	$('.long').css('background-color','rgb(230,231,239)')
	$('.first').css('background-color','rgb(230,231,239)')
	$('.xin').css('background-color','rgb(230,231,239)')
	//小三角形颜色
	$('.bot:eq(4)').css('border-top','8px rgb(80,93,169) solid')
	$('.bot:eq(1)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(2)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(3)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(0)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(5)').css('border-top','8px rgb(247,247,247) solid')
	
	//模块显示和隐藏
	$('.main-box:eq(4)').css('display','block')
	$('.main-box:eq(1)').css('display','none')
	$('.main-box:eq(2)').css('display','none')
	$('.main-box:eq(3)').css('display','none')
	$('.main-box:eq(0)').css('display','none')
	$('.main-box:eq(5)').css('display','none')
})

$('.xin').on('click',function(){
	$('.xin').css('background-color','rgb(80,93,169)')
	$('.dian').css('background-color','rgb(230,231,239)')
	$('.di').css('background-color','rgb(230,231,239)')
	$('.long').css('background-color','rgb(230,231,239)')
	$('.er').css('background-color','rgb(230,231,239)')
	$('.first').css('background-color','rgb(230,231,239)')
	//小三角形颜色
	$('.bot:eq(5)').css('border-top','8px rgb(80,93,169) solid')
	$('.bot:eq(1)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(2)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(3)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(4)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(0)').css('border-top','8px rgb(247,247,247) solid')
	
	//模块显示和隐藏
	$('.main-box:eq(5)').css('display','block')
	$('.main-box:eq(1)').css('display','none')
	$('.main-box:eq(2)').css('display','none')
	$('.main-box:eq(3)').css('display','none')
	$('.main-box:eq(4)').css('display','none')
	$('.main-box:eq(0)').css('display','none')
})

$("body").ready(function() {
	$('.first').css('background-color','rgb(80,93,169)')
	$('.dian').css('background-color','rgb(230,231,239)')
	$('.di').css('background-color','rgb(230,231,239)')
	$('.long').css('background-color','rgb(230,231,239)')
	$('.er').css('background-color','rgb(230,231,239)')
	$('.xin').css('background-color','rgb(230,231,239)')
	//小三角形颜色
	$('.bot:eq(0)').css('border-top','8px rgb(80,93,169) solid')
	$('.bot:eq(1)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(2)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(3)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(4)').css('border-top','8px rgb(247,247,247) solid')
	$('.bot:eq(5)').css('border-top','8px rgb(247,247,247) solid')
	//模块显示和隐藏
	$('.main-box:eq(0)').css('display','block')
	$('.main-box:eq(1)').css('display','none')
	$('.main-box:eq(2)').css('display','none')
	$('.main-box:eq(3)').css('display','none')
	$('.main-box:eq(4)').css('display','none')
	$('.main-box:eq(5)').css('display','none')
})
