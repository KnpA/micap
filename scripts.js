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
    
    wcircleparams_iot = {
		width: '65px',
		height: '65px',
		angle_start : Math.PI/2,//-Math.PI/2,
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
	$('.menu_quand').WCircleMenu(wcircleparams);
    
    $('.menu_iot').WCircleMenu(wcircleparams_iot);

	$('.menu_qui .wcircle-menu-item').on('click',function(){
        if(!$('.menu_qui').hasClass("wcircle-animating")){           
		  $('.menu_qui .wcircle-icon').html($(this).html());
       }
	});
    $('.menu_ou .wcircle-menu-item').on('click',function(){
        if(!$('.menu_ou').hasClass("wcircle-animating")){           
		  $('.menu_ou .wcircle-icon').html($(this).html());
       }
	});
    $('.menu_quand .wcircle-menu-item').on('click',function(){
        if(!$('.menu_quand').hasClass("wcircle-animating")){           
		  $('.menu_quand .wcircle-icon').html($(this).html());
       }
	});
    $('.menu_iot .wcircle-menu-item').on('click',function(){
        if(!$('.menu_iot').hasClass("wcircle-animating")){           
		  $('.menu_iot .wcircle-icon').html($(this).html());
       }
	});


});