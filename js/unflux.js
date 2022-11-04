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
            // this.addLang();
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

        // addLang : function() {
        //     if ( $('html').attr('lang') == 'en' ) {
        //         $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visit/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visit/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li>');
        //     } else {
        //         $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visiter/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visiter/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li>');
        //     }
        // },


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
            // Infos pratiques moves
            const ip = document.querySelector('.content905618')
            if(ip) {
                const ipTitle = document.querySelector('.content905618 h1')
                const ipZone1 = document.querySelector('#zone1')
                ipZone1.appendChild(ipTitle)

                const ipDateSection = document.querySelector('.content905618 .edito:nth-child(1) .inside')
                const dateSection = document.createElement('div')
                ipDateSection.appendChild(dateSection)
                dateSection.classList.add('salon-dates')
                dateSection.innerHTML = `
                <div class="salon-dates__start salon-dates__part">
                    <p class="salon-dates__day">06</p>
                    <p class="salon-dates__month">novembre</p>
                    <p class="salon-dates__year">2022</p>
                    <svg viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333ZM6 7L46 7V5L6 5V7Z" fill="#252525"/>
                    </svg>
                </div>
                <div class="salon-dates__end salon-dates__part">
                    <p class="salon-dates__day">10</p>
                    <p class="salon-dates__month">novembre</p>
                    <p class="salon-dates__year">2022</p>
                    <svg viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9L40 9V7L0 7L0 9Z" fill="white"/>
                    </svg>
                </div>
                `;      
            }
             // Pourquoi visiter moves
            const whyVisit = document.querySelector('.content905639');
            if(whyVisit) {
                const blocks = document.querySelectorAll('.content905639 .edito');
                blocks.forEach((el, i) => {
                    if(i === 0) return
                    const title = el.querySelector('h2');
                    title.innerHTML = `<span>#${i + 1}</span>` + title.innerHTML;

                    const img = el.querySelector('.at-illust');
                    img.outerHTML = `<div class="img-with-cube"><div class="img-with-cube__cube"></div>${img.outerHTML}</div>`;

                    el.querySelector('.inside').insertAdjacentHTML('beforeend', '<div class="edito-content"></div>');

                    const content = el.querySelector('.edito-content');
                    const paragraphs = el.querySelectorAll('p');
                    paragraphs.forEach((paragraph) => {
                        content.appendChild(paragraph);
                    })
                })
            }

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
                const seeMore = popUp.querySelector('.btn')
                  seeMore.addEventListener('click', () => {
                    setCookie('popup', 'false', 10)
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
            })
          }
        }

    }
    simaJS.init();

})(jQuery);
