$(document).ready(function() {
	//doc onload
});

function onContentLoad(nav_menu) {
	var url = "/" + nav_menu.id;
	$.post(url, null, function(data, status) {
		if (status == 'success') {
			document.getElementById('content-info').innerHTML = data;
		}
	});
}

function onContentChange(nav_menu) {
	var new_content = document.createElement('div');
	new_content.setAttribute('id', 'content-info');
	new_content.setAttribute('class', 'sub-content show fade-in');
	$("section[name='content-info']").append(new_content);
	var old_content = $('#content-info');
	old_content.removeAttr('id');
	old_content.addClass('fade-out');
	setTimeout(function() {
		$(new_content).removeClass('fade-in');
	}, 0);	
	setTimeout(function() {
		$('.fade-out').remove();
	}, 300);
	onContentLoad(nav_menu);
}

function onNavigation(caller) {
	if (!($('.nav-link').hasClass('active'))) {
		onContentLoad(caller);
		$('#content-info').toggleClass('show');
		$('nav').toggleClass('top-nav');
		$('#main').toggleClass('hidden');
		$('.nav-back').toggleClass('back');
		$(caller).addClass('active');
	} else {
		if (!($(caller).hasClass('active'))) {
			onContentChange(caller);
			$('.nav-link.active').removeClass('active');
			$(caller).addClass('active');
		}
	}
}

function onBack() {
	setTimeout(function() {
		$('#content-info').empty();
	}, 300);
	try {
		$('.active').removeClass('active');
	} catch(e) {}
	$('#content-info').toggleClass('show');
	$('nav').toggleClass('top-nav');
	$('#main').toggleClass('hidden');
	$('.nav-back').toggleClass('back');
}

function onShowContactInfo(caller_id) {
	try {
		$('.social-inner.active').removeClass('active');
	} catch(e) {}
	var search_id = '#' + caller_id + "_content";
	$(search_id).addClass('active');
}

function onShowContactDefault() {
	$('.social-inner.active').removeClass('active');
	$('#social_default_content').addClass('active');
}

function onShowContact(caller) {
	if (!($('.social-section').hasClass('active'))) {
		onShowContactInfo(caller.id);
		$(caller).addClass('active');
	} else {
		if (!($(caller).hasClass('active'))) {
			onShowContactInfo(caller.id);
			$('.social-section.active').removeClass('active');
			$(caller).addClass('active');
		} else {
			onShowContactDefault();
			$(caller).removeClass('active');
		}
	}
}