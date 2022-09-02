(function($) {

    var simaJS = {

        init : function(){
            this.popin();
            this.addLang();
            this.showMenu();
            this.scrollHorizontalTable();

        },
        

        popin : function(){
            $('.video-item').click(function(){
                var videoName = $(this).data('videoname');
                $('#'+videoName).addClass('popin-open');
                $('html').addClass('noscroll');
            });
            $(".popin-close, .popin-overlay").click(function(){
                var videoName = $(this).data('videoname');
                $('.popin').removeClass('popin-open');
                $("#"+ videoName +' iframe').attr('src', $('#'+ videoName +' iframe').attr('src'));
                $('html').removeClass('noscroll');
            });
        },

        addLang : function() {
            if ( $('html').attr('lang') == 'en' ) {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visit/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visit/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li> <li class="ls-lang-item ls-lang-de"><a class="ls-lang-link" href="/Visit/Die-SIMA-besuchen"><abbr title="Deutsch">de</abbr></a></li>');
            } else {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visiter/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visiter/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li> <li class="ls-lang-item ls-lang-de"><a class="ls-lang-link" href="/Visiter/Die-SIMA-besuchen"><abbr title="Deutsch">de</abbr></a></li>');
            }
        },


        showMenu : function() {
            var menuBtn = $('.sb-menu-trigger');
            var mainNav = $('.site-banner > .inside .main-navigation');

            menuBtn.click(function(){
                if(mainNav.hasClass('menu-open')) {
                    mainNav.removeClass('menu-open');
                    menuBtn.removeClass('menu-open');
                } else {
                    mainNav.addClass('menu-open');
                    menuBtn.addClass('menu-open');
                }
            });
        },

        scrollHorizontalTable : function() {
            $('.article-content table').wrap('<div class="horizontalScroll"></div>');
        }

    }
    simaJS.init();

})(jQuery);
