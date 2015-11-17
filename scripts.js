$(document).ready(function(){
    wcircleparams = {
		width: '65px',
		height: '65px',
		angle_start : -Math.PI/2,//-Math.PI/2,
		delay: 50,
		distance: 100,
		angle_interval: -Math.PI/4,
		easingFuncShow:"easeOutBack",
		easingFuncHide:"easeInBack",
		step:35,
		itemRotation:360,
        iconRotation:0
	};
    
	$('.menu_qui').WCircleMenu(wcircleparams);
	$('.menu_ou').WCircleMenu(wcircleparams);

	$('.menu_qui .wcircle-menu-item').on('click',function(){
        if(!$('.menu_qui').hasClass("wcircle-animating")) {
            $('.menu_qui .wcircle-icon').html($(this).html());
            $('.menu_qui .wcircle-icon div').html($('.menu_qui .wcircle-icon img').attr('title'));
       }
	});
    $('.menu_ou .wcircle-menu-item').on('click',function(){
        if(!$('.menu_ou').hasClass("wcircle-animating")){
            $('.menu_ou .wcircle-icon').html($(this).html());
            $('.menu_ou .wcircle-icon div').html($('.menu_ou .wcircle-icon img').attr('title'));
        }
	});


});