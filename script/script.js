/*JAVASCRIPT*/

function googleMap(position){
    var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        disableDefaultUI: true, 
        mapTypeId: google.maps.MapTypeId.TERRAIN,
    });
    var marker = new google.maps.Marker({
        map: map,
        position: location,
        animation: google.maps.Animation.DROP,
        title: "This is your location"
    });
	map.setCenter(location);
	document.getElementById('map').setAttribute('style', 'border: 1px solid #B6B7B8');
	document.getElementById('location').src="Pictures/About/Check_Green.png";
}

function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(googleMap, showError);
    } else{ 
        alert("Geolocation is not supported by this browser.");
    }
}

function check(){
	var name = document.getElementById('name');
	var mail = document.getElementById('mail');
	var message = document.getElementById('message');
	
	var reName = /^[A-Z]{1}[a-z]{2,14}$/;
	var reMail = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
	
	var errors = new Array();
	
	try{
		if(!name.value.match(reName) && name.value != "") throw "Your name is not in good format!";
		if(name.value == "") throw "You didn't enter your name!";
		} catch(e){
			errors = errors + e + "\n\n";
		}
		
	try{
		if(!mail.value.match(reMail) && mail.value != "") throw "Your e-mail is not in good format!";
		if(mail.value == "") throw "You didn't enter your mail!";
		} catch(e){
			errors = errors + e + "\n\n";
		}
		
	try{
		if(message.value == "") throw "You didn't enter your message!";
		} catch(e){
			errors = errors + e;
		}
		
	if (errors.length == 0) {
		alert("Your message has been successfully sent.");
	}else {
		alert(errors);
	}
}

/*JQUERY*/

$(document).ready(function(){
	
	$("#slideMenu").on("click", function(){
		$("#infoMenu").slideToggle();
		$(this).toggleClass("temp");
	});
	
	$('.color').on('click', function (){
		if($(this).parent().attr('id') == 'left_color'){
			
			$(this).parent().find('.select').removeClass('select');
			$(this).addClass('select');
			
			$temp = $(this).attr('id');
			
			$('#iPhone_6S').fadeOut(300, function(){
			$('#iPhone_6S').attr('src', 'Pictures/iPhone/6S_'+$temp+'.png');
			$('#iPhone_6S').fadeIn(300);
			});
		}
		else{
			
			$(this).parent().find('.select').removeClass('select');
			$(this).addClass('select');
			
			$temp = $(this).attr('id');
			
			$('#iPhone_6S_Plus').fadeOut(300, function(){
			$('#iPhone_6S_Plus').attr('src', 'Pictures/iPhone/6S_Plus_'+$temp+'.png');
			$('#iPhone_6S_Plus').fadeIn(300);
			});
		}
    });
	$(function(){
		$('#accordion div').hide();
		$('#accordion h4').click(function (){
			$(this).next('.pane').slideToggle('slow');
			$(this).toggleClass('current');
			$(this).siblings("h4").removeClass('current');
		});
	});
	$('table > tbody > tr > td:first-child').css('background-color','#EBEBEB');
});