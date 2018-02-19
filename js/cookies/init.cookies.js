jQuery(document).ready(function($) {

	// Cookies
	$.cookieCuttr({
		cookieAnalyticsMessage: $('.cookies').data('cookiesmsg'),
		cookieWhatAreLinkText: $('.cookies').data('cookieswhat'),
		cookieAcceptButtonText: $('.cookies').data('cookiesbtn'),
		cookieWhatAreTheyLink: $('.cookies').data('cookieslink')
	});

	if ($.cookie('cc_cookie_accept') == 'cc_cookie_accept') {
		// insert the code you do not want to run UNTIL cookies are accepted here
	}

	// Hide the cookie banner on click elsewhere
	$('body').one('click', function() {
	  	$('.cc-cookie-accept').trigger('click');
	});

	// Disable click propagation to body
	$('.cc-cookies').on('click', function(e) {
		e.stopPropagation();
	});

});
