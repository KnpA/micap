$(document).ready(function(){
    qui = "Qui ?";
    ou = "O&uacute ?";
    quand = "Quand ?";
    quoi = "Quoi ?"
    
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
    
    updatePhrase();
    
	$('.menu_qui').WCircleMenu(wcircleparams);
	$('.menu_ou').WCircleMenu(wcircleparams);
	$('.menu_quand').WCircleMenu(wcircleparams);
    $('.menu_iot').WCircleMenu(wcircleparams_iot);

	$('.menu_qui .wcircle-menu-item').on('click',function(){
        if(!$('.menu_qui').hasClass("wcircle-animating")) {
            $('.menu_qui .wcircle-icon').html($(this).html());
            qui = $('.menu_qui .wcircle-icon img').attr('title');
            $('.menu_qui .wcircle-icon div').html(qui);
            updatePhrase();
       }
	});
    $('.menu_ou .wcircle-menu-item').on('click',function(){
        if(!$('.menu_ou').hasClass("wcircle-animating")){
            $('.menu_ou .wcircle-icon').html($(this).html());
            ou = $('.menu_ou .wcircle-icon img').attr('title');
            $('.menu_ou .wcircle-icon div').html(ou);
            updatePhrase();
        }
	});
    $('.menu_quand .wcircle-menu-item').on('click',function(){
        if(!$('.menu_quand').hasClass("wcircle-animating")){           
            $('.menu_quand .wcircle-icon').html($(this).html());
            quand = $('.menu_quand .wcircle-icon img').attr('title');
            $('.menu_quand .wcircle-icon div').html(quand);
            updatePhrase();
        }
	});
    $('.menu_iot .wcircle-menu-item').on('click',function(){
        if(!$('.menu_iot').hasClass("wcircle-animating")){           
            $('.menu_iot .wcircle-icon').html($(this).html());
            quoi = $('.menu_iot .wcircle-icon img').attr('title');
            $('.menu_iot .wcircle-icon div').html(quoi);
            updatePhrase();
        }
	});
    
    function updatePhrase() {
        if(qui == "personne") {
            $('.phrase').html("Si <span class='cyan'>"+qui+"</span> ne se trouve dans <span class='green'>"+ou+"</span> <span class='yellow'>"+quand+"</span> alors <span class='red'>"+quoi+"</span>.")
        } else {
          $('.phrase').html("Si <span class='cyan'>"+qui+"</span> se trouve dans <span class='green'>"+ou+"</span> <span class='yellow'>"+quand+"</span> alors <span class='red'>"+quoi+"</span>.")  
        }   
    }
});