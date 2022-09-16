$(document).ready(function(){
   //Countdown
		if ( $('#countdown').length ) {
			
			if ($('html').attr('lang') == 'fr') {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>jours%!d</span></li>'
						    + '<li><span>%H</span> <span>heures%!d</span></li>'
						    + '<li><span>%M</span> <span>minutes%!d</span></li>'
					))
			});
			} else {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>days%!d</span></li>'
						    + '<li><span>%H</span> <span>hours%!d</span></li>'
						    + '<li><span>%M</span> <span>minutes%!d</span></li>'
					))
			});
			}
			
		}
});
