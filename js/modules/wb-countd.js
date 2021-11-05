$(document).ready(function(){
   //Countdown
		if ( $('#countdown').length ) {
			
			if ($('html').attr('lang') == 'fr') {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>jour%!d</span></li>'
						    + '<li><span>%H</span> <span>heure%!d</span></li>'
						    + '<li><span>%M</span> <span>minute%!d</span></li>'
					))
			});
			} else {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>day%!d</span></li>'
						    + '<li><span>%H</span> <span>hour%!d</span></li>'
						    + '<li><span>%M</span> <span>minute%!d</span></li>'
					))
			});
			}
			
		}
});