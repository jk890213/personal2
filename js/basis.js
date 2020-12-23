$(document).ready(function(){

	var hamburg = document.getElementsByClassName('hamburg')[0];
	hamburg.addEventListener('click', function() {
		let span1 = document.getElementsByClassName('span1')[0];
		let span2 = document.getElementsByClassName('span2')[0];
		let span3 = document.getElementsByClassName('span3')[0];
		span1.classList.toggle('move1');
		span2.classList.toggle('move2');
		span3.classList.toggle('move3');
		let nav = document.getElementsByClassName("nav")[0];
		nav.classList.add("-transition");
		if(nav.classList.contains("-translate")){
			nav.classList.remove("-translate");
			setTimeout(function(){
				nav.classList.remove("-transition");
			}, 500);
		}else{
			nav.classList.add("-translate");
		}
	});

	//為何不能停止預設行為?
	// var noa = document.getElementsByClassName("-on")[0];
	// noa.addEventListener("click", function(){
	// 	alert("hi");
	// });

	// noa.addEventListener("click", function(e){
	// 	e.preventDefault
	// });

	$('a.-on').click(function(e){
		e.preventDefault();
	});

	
    $('#goTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });




});




