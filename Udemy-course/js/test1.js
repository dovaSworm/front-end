// var niz = [5, 7, 8, 14, 3, 19, 11, 15, 16, 2, 20, 1, 6, 10, 12, 18, 17, 13];

// function pronadji(niz){
// 	niz.sort(function(a, b){return a-b});
// 	for(i = niz[0]; i < niz[niz.length-1]; i++){
// 		console.log(niz[i]);
// 		if(niz[i+1] - niz[i] > 1)
// 			console.log("Missing nubmber is: " + (niz[i] + 1));
// 	}
// }

// function missing(niz){
// 	var missNo = -1;

// 	for(var i  =0; i < niz.length; i++){
// 		if(niz.indexOf(i) === -1)
// 			missNo = i;
// 		console.log(missNo);
// 	}
// }
////////////////////// javascript class ////////////////////////////////
// class Animal{

// constructor(name, age){
// 	console.log("Created animal", name, age);
// 	this.name=name;
	
// }
// static voice(){
// 	return "bark";
// }

// namelength(){
// 	return this.name.length;
// }
// ime(){
// 	return this.name;
// }

// }
// Animal.planet = "earth";
// var dog = new Animal("roki", 6);
// console.log(Animal.voice());
// console.log(Animal.planet);
// console.log(document.body.click.clientX);

// function printMousePos(event) {
//   document.grid.textContent =
//     "clientX: " + event.clientX +
//     " - clientY: " + event.clientY;
   // var novi =  document.createElement("div");
   // document.getElementById("grid").apend(novi);
// }
// document.addEventListener("click", printMousePos);





function myFunkcija(){
	console.log('moja js funkcija');
};
$(document).ready(function(){

///////////////////////////// nasa jQuery klasa /////////////////////
	dQuery("#main").addClass("DOVACAR");

////////////////////////////  WHICH ; element popup wher clicked //////////////////

	// $(document).on('mousedown', function(event){
	// 	event.preventDefault();

	// 	// switch(event.which){
	// 	// 	case 1: 
	// 	// 		console.log('Cliked left button');
	// 	// 		break;
	// 	// 	case 2: 
	// 	// 		console.log('Cliked middle button');
	// 	// 		break;
	// 	// 	case 3: 
	// 	// 		console.log('Cliked right button');
	// 	// 		break;
	// 	// }
	// 	$(document).on('contextmenu', function(){
	// 		return false;
	// 	});

	// 	if(event.which == 3){

	// 		$('.hidden').removeClass('shown');

	// 		if($(event.target).is('img')){
	// 			$('.saveimg, .newtab').addClass('shown');
	// 		}else if($(event.target).is('a')){
	// 			$('.newtab').addClass('shown');
	// 		}


	// 		console.log(event.clientX, event.clientY, event.pageY, event.pageX);
	// 		$('#context').css({
	// 			top: event.pageY,
	// 			left: event.pageX
	// 		});
	// 		$('#context').fadeIn();
	// 		return false;
	// 	}
	// 	$('#context').fadeOut();
	// });


// $('#text').html("this is my text with jquery");
// $('.my-input').val("new value for input");
// var el = document.getElementById('text');
// console.log("el in vanila is:", el);
// console.log("element in jquery is:", $(el));
// $('#go-button').on('mouseenter',myFunkcija);
// document.getElementById('go-button').addEventListener('click',myFunkcija);

//////////////////////////// event handling attribute changeing ////////////////////
	$('[data-trigger="dropdown"]').on('mouseenter', function(){

		var submenu = $(this).parent().find('.submenu');
		submenu.fadeIn(200);
		// $('.submenu').attr("display", "block");
		$('.profile-menu').on('mouseleave', function(){
			submenu.fadeOut(200);
		});
	});


/////////////////////// preventing default actions  ////////////////////////////  

	$('[href="https://google.com"]').on('click', function(event){
		// event.preventDefault();
		console.log("klikno al sprijeceno");
		return false;
	});


////////////////////////////  targetiranje elementaa preko eventa kroz jquery ///////
	// $('#prepend, #append, #replace').on('click', function(event){

	// 	event.preventDefault();
	// 	var el = $(event.currentTarget);
	// 	var action = el.attr('id');
	// 	var content = $('.text').val();
	// 	if(action == "prepend"){
	// 		console.log("Prepending console");
	// 		$('#main').prepend('<a href="#">' + content + '<a/>');
	// 	}else if(action=="append"){
	// 		$('#main').append(content);
	// 	}else if(action == "replace"){
	// 		$('#main').html(content);
	// 	}
	// 	$('.text').val("");
	// });

	///////// find() firs() last() focusin focusout contains() is() ////////////

	$('#main').find('.my-selector').addClass('jojojo');
	console.log($('.submenu a').first().text());

	$('textarea').focusin(function(){
		console.log('focusirano in');
	});

	$('textarea').focusout(function(){
		console.log('focusirano out');
	});

	if($(':contains("Lorem")').hasClass("jojojo"))
	console.log("nasao sam taj paragraf koji sadrzi drazenu rec");

	$('p').each(function(){
		console.log($(this).text());
	});

	$('.DOVACAR').css({
		background: '#f00'
	});
	

});