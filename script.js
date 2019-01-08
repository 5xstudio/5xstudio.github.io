window.onload = function(){
	$(".preloader").fadeOut("slow");

	var tl = new TimelineLite({delay: 1.5}),
	    firstBg = document.querySelectorAll('.text__first-bg'),
	    secBg = document.querySelectorAll('.text__second-bg'),
	    word  = document.querySelectorAll('.text__word');
	  
	tl
	    .to(firstBg, 0.2, {scaleX:1})
	    .to(secBg, 0.2, {scaleX:1})
	    .to(word, 0.1, {opacity:1}, "-=0.1")  
	    .to(firstBg, 0.2, {scaleX:0})
	    .to(secBg, 0.2, {scaleX:0});
	  
	// document.querySelector('.restart').onclick = function() {tl.restart();};
	var state = false;
	$(this).removeClass("is-active");
	$(".hamburger").on("click",function(){
		if(state){
			$(this).addClass("is-active");
		}else{
			$(this).removeClass("is-active");
		}
		state = !state;
	});
};

