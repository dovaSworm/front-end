$(document).ready(function(){

	var weapons = [ 
		{
		"name": ".44 pistol", 
		"damage": 48, 
		"fire_rate": 6,
		"range": 139,
		"accuracy": 66,
		"weight": 4.2,
		"value": 99,
		"img_url": "img/pistolo.png"
		},
		{
		"name": "10mm pistol", 
		"damage": 18, 
		"fire_rate": 46,
		"range": 129,
		"accuracy": 61,
		"weight": 5.2,
		"value": 53,
		"img_url": "img/charge.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		},
		{
		"name": "assault rifle", 
		"damage": 30, 
		"fire_rate": 40,
		"range": 119,
		"accuracy": 72,
		"weight": 13.1,
		"value": 144,
		"img_url": "img/crosshair.png"
		}
	];

	for(item in weapons){
		console.log(item.name);
		$('ul.item-list').append("<li><a href=\"#\" class=\"" + weapons[item].name +"\">" +weapons[item].name+"</a></li>");
	}

	


	$('.item-list a').on('click', function(e){
		
		$('.item-list a').removeClass('active');
		$(e.currentTarget).addClass('active');
		if($(e.currentTarget).hasClass('active')){

			// $('.col-12').prepend("<span class=\"damage-equiped pull-right\">(48)</span>");
			$('.damage-equiped').css('visibility', 'visible')
			.html("(" + $('.damage').html() + ")");
			$('.fire-rate-equiped').css('visibility', 'visible')
			.html("(" + $('.fire_rate').html() + ")");
			$('.value-equiped').css('visibility', 'visible')
			.html("(" + $('.value').html() + ")");
			$('.weight-equiped').css('visibility', 'visible')
			.html("(" + $('.weight').html() + ")");
			$('.accuracy-equiped').css('visibility', 'visible')
			.html("(" + $('.accuracy').html() + ")");
			$('.range-equiped').css('visibility', 'visible')
			.html("(" + $('.range').html() + ")");
			$('.ammo-equiped').css('visibility', 'visible')
			.html("(" + $('.ammo').html() + ")");
			// $('.range-equiped').html("(" + $('.range').html() + ")");
			// $('.damage-equiped').html("(" + $('.damage').html() + ")");
			// $('.ammo-equiped').html("(" + $('.ammo').html() + ")");
			// $('.value-equiped').html("(" + $('.value').html() + ")");
			// $('.weight-equiped').html("(" + $('.weight').html() + ")");
			// $('.accuracy-equiped').html("(" + $('.accuracy').html() + ")");
			// $('.fire-rate-equiped').html("(" + $('.fire_rate').html() + ")");  	
			
		}

		var current_item = $(e.currentTarget).attr('class');
		for(item in weapons){
			if(weapons[item].name == current_item){
				$('.img-weapon img').attr("src", weapons[item].img_url);
				var container = $('.item-stats');
				$('.range-equiped').html(weapons[item].range);
				$('.damage-equiped').html(weapons[item].damage);
				$('.fire-rate-equiped').html(weapons[item].fire_rate);
				$('.value-equiped').html(weapons[item].range);
				$('.weight-equiped').html(weapons[item].accuracy);
				$('.accuracy-equiped').html(weapons[item].weight);
				$('.ammo-equiped').html(weapons[item].value);
			
			}
		}
		
	});


	$('.item-list a').on('mouseenter', function(e){
		var current_item = $(e.currentTarget).attr('class');
		for(item in weapons){
			if(weapons[item].name == current_item || current_item == weapons[item].name + " active"){
				// console.log(current_item == weapons[item].name + " active");
				if($(e.currentTarget).hasClass('active')){
			$('.img-weapon img').attr("src", weapons[item].img_url);
		}
				// console.log($('.item-list li:first-child'));
				var container = $('.item-stats');
				container.find('.damage').html(weapons[item].damage);
				container.find('.fire_rate').html(weapons[item].fire_rate);
				container.find('.range').html(weapons[item].range);
				container.find('.accuracy').html(weapons[item].accuracy);
				container.find('.weight').html(weapons[item].weight);
				container.find('.value').html(weapons[item].value);
				$('.img-weapon img').attr("src", weapons[item].img_url)
				// if($(e.currentTarget).hasClass('active')){
				// 	console.log($(e.currentTarget));
;
				// }else{
				// 	$('.img-weapon img').attr("src", weapons[item].img_url);
				// 	// console.log($('.item-list a'));
				// }
				
			}
			
		}

	});

});
