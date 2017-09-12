
$('.qq').on('click',function() {
	$('.qq-contact').css('visibility','visible')
	$('.phone-contact').css('visibility','hidden')
})

$('.close1').on('click',function() {
	$('.qq-contact').css('visibility','hidden')
})

$('.ph').on('click',function() {
	$('.phone-contact').css('visibility','visible')
	$('.qq-contact').css('visibility','hidden')
})

$('.close2').on('click',function() {
	$('.phone-contact').css('visibility','hidden')
})

