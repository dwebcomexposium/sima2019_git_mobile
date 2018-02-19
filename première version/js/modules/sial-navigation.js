/**!
	Corporate Navigation
	Dropdown menu & Mega menu navigation

	@contributors: Geoffrey Crofte (Alsacréations)
	@date-created: 2015-04-01
	@last-update: 2015-05-28
 */

// var bannerHeight = $banner.height();
var bannerHeight = 120;
var $bannerSticky = false;
var $window = $(window);
var $banner = null;

function scrollSticky() {
	var scrollTop = $window.scrollTop();
	if (scrollTop > bannerHeight) {
		if($bannerSticky === false) {
			$bannerSticky = $banner.clone(true,true);
			$bannerSticky.addClass('is-stuck').insertBefore($banner).hide().slideDown("fast");
		}
		// Correctif iPad
		if ($('body.front').length === 0 && /iP(ad|hone|od)/.test(navigator.userAgent)){
			$banner.find('.header-intro').hide().show(0);
		}
	} else {
		if($bannerSticky !== false) {
			$bannerSticky.slideUp("fast", function() {
				$(this).remove();
			});
			$bannerSticky = false;
		}
	}
}

;(function($) {

	var $menu = $('.mn-menu'),
		$submenus = $menu.find('.mn-item-has-megamenu, .mn-item-has-submenu'),
		speed = 700,
		menuInitPos = $('#main').offset(),
		scrolltimer,
		resizetimer;

	$banner = $banner = $('.mn-menu-line').closest('.site-banner');

	// Actions on mouse interactions
	$submenus.on('click.megamenu', ' > .mn-link' ,function(e) {
		e.preventDefault();
		e.stopPropagation();
		$submenus.removeClass('is-open').find('> .mn-sub-menu-mega, > .mn-sub-menu').fadeOut(speed);
		$(this).closest('.mn-item-has-submenu').addClass('is-open').find('> .mn-sub-menu-mega, > .mn-sub-menu').fadeIn(speed);
		return false;
	});

	// Accessibility (keyboard tab nav)
	$submenus.find('.mn-link').on('focus', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$submenus.removeClass('is-open').find('> .mn-sub-menu-mega, > .mn-sub-menu').fadeOut(speed);
		$(this).closest('.mn-item-has-submenu').addClass('is-open').find('> .mn-sub-menu-mega, > .mn-sub-menu').fadeIn(speed);
		return false;
	});

	$('body').on('click.megamenu', function(e) {
		$submenus.removeClass('is-open').find('> .mn-sub-menu-mega, > .mn-sub-menu').stop().fadeOut(speed);
	});

	$submenus.find('a:last').on('blur', function() {
		$('body').trigger('click');
	});

	// actions on mouse interactions (nav-alternate)
	if ($('body').hasClass('nav-alternate')) {
	$submenus.on('mouseenter.megamenu', function(e){
			$(this).addClass('is-open')
				.find('> .mn-sub-menu-mega, > .mn-sub-menu').stop().fadeIn(speed);
		})
		.on('mouseleave.megamenu', function(e){
			$(this).removeClass('is-open')
				.find('> .mn-sub-menu-mega, > .mn-sub-menu').stop().fadeOut(speed);
		});

	// accessibility (keyboard tab nav)
	$submenus.find('> .mn-link').on('focus', function(){
		$(this).closest('.mn-menu-item').trigger('mouseenter');
	});
	$submenus.find('a:last').on('blur', function(){
		$(this).closest('.mn-item-lvl-1').trigger('mouseleave');
	});
	}

	// Sticky things on scroll
	$window.on('scroll mousewheel DOMMouseScroll MozMousePixelScroll', { mousewheel: { behavior: 'debounce', delay: 500 } }, function(e) {
		clearTimeout(scrolltimer);
		scrolltimer = setTimeout(scrollSticky);
	});
	scrollSticky();

	// On resize
	$window.resize(function(e) {
		clearTimeout(scrolltimer);
		clearTimeout(resizetimer);
		resizetimer = setTimeout(function(){
			$('body.body-corpo .site-banner > .inside > .header-intro').outerHeight($window.height());
		});
	});
	$(window).triggerHandler('resize');

	if(!$('body').hasClass('nav-alternate')){
		$('.ac-offcanvas-trigger').acOffCanvas();
	}

})(jQuery);
