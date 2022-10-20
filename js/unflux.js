const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

(function($) {
    var simaJS = {

        init : function(){
            this.popin();
            this.addLang();
            this.showMenu();
            this.scrollHorizontalTable();
            this.rework2020();
            this.anniversaryBaneer();
            this.anniversaryGridBlock();
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
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visit/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visit/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li>');
            } else {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visiter/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visiter/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li>');
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
        },
        
        rework2020() {
            const popUp = document.querySelector('.popup')
            if(popUp) {
              const showPopup = getCookie('popup')
              if(!showPopup) {
                popUp.style.display = 'flex';
                const HTMLElement = document.querySelector('html')
                HTMLElement.classList.add('noscroll')
                const close = popUp.querySelector('.popup__close')
                close.addEventListener('click', () => {
                    setCookie('popup', 'false', 10)
                    popUp.style.display = 'none';
                    HTMLElement.classList.remove('noscroll')
                })
              }
            }
        },

        anniversaryBaneer() {
            const baneer = document.querySelector('.anniversary-baneer')
            if(!baneer) return

            // Add class on parent
            baneer.parentNode.parentNode.classList.add('anniversary-baneer-wrapper')

            // Move banner
            const header = document.querySelector('.site-banner')
            const headerInside = header.querySelector('.inside')
            header.insertBefore(baneer, headerInside)

            // Handle close banner
            const close = document.querySelector('.anniversary-baneer__close') 
            close.addEventListener('click', () => {
                header.classList.add('no-banner')
                document.querySelector('.site-wrapper').classList.add('no-banner')
            })
        },

        anniversaryGridBlock() {
          const wrapper = document.querySelector('#zone2')
          const blocks = document.querySelectorAll('.block[class*="centans"]')
          if(blocks.length > 0) {
            const container = document.createElement('div')
            container.classList.add('anniversary-grid')
            wrapper.insertBefore(container, blocks[0])
            const subContainer = document.createElement('div')
            subContainer.classList.add('anniversary-grid__container')
            container.appendChild(subContainer)
            blocks.forEach((el, index) => {
              subContainer.appendChild(el)
              const containsButton = el.querySelector('.lien1')
              const link = el.querySelector(`.block-title a`)
              const inside = document.querySelector(`.centans${index + 1} > .inside`)
              inside.addEventListener('click', () => {
                  containsButton ? containsButton.click() : link.click()
              })
            })
          }
        }

    }
    simaJS.init();

})(jQuery);
