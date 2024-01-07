setTimeout(() => {

     

    


   

    

    


    

    
    // tooltips

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    


    
    /*------------------------------------------
    search hotel
    -------------------------------------------*/

    
 

     /*------------------------------------------
        = TEAM SECTION
    -------------------------------------------*/
    var singleMember = $('.social');
    singleMember.on('click', function () {
        $(this).toggleClass('active');
    });


    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }

    // HERO SLIDER
    



    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

                //active wow
                wow.init();



            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }


    


    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
              enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }


    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter:'*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function() {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter:selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid =  $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }

    // masonryGridSetting();


     



    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.wpo-site-header .navigation').length) {
        cloneNavForSticyMenu($('.wpo-site-header .navigation'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.wpo-site-header .navigation');

        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.removeClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;


    }



/*------------------------------------------
        = Header search toggle
    -------------------------------------------*/
    if($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchToggleBtnIcon = $(".search-toggle-btn i");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function(e) {
            searchContent.toggleClass("header-search-content-toggle");
            searchToggleBtnIcon.toggleClass("fi flaticon-search fi ti-close");
            e.stopPropagation();
        });

        body.on("click", function() {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function(e) {
            e.stopPropagation();
        });
    }


   


   
   
    /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
    if ($(".wpo-service-slider").length) {
        $(".wpo-service-slider").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 20,
            loop:true,
            autoplayHoverPause:true,
            dots: true,
            nav: false,
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    nav: false
                },

                500 : {
                    items: 1,
                    dots: true,
                    nav: false
                },

                768 : {
                    items: 2,
                },

                1200 : {
                    items: 3
                },

                1400 : {
                    items: 4
                },

            }
        });
    }
    /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
    if ($(".wpo-happy-client-slide").length) {
        $(".wpo-happy-client-slide").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: false,
            items:4
        });
    }

    /*------------------------------------------
    service-items Carousel
    -------------------------------------------*/
    

    /*------------------------------------------
    service-items Carousel
    -------------------------------------------*/
    if ($(".room-active").length) {
        $(".room-active").owlCarousel({
            autoplay:true,
            smartSpeed: 300,
            margin:10,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            arrows:false,
            nav: true,
            navText: ['<i class="fi flaticon-left-arrow"></i>','<i class="fi flaticon-next"></i>'],
            center:true,
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    arrows:false,
                    nav: false,
                },

                575 : {
                    items: 1,
                },
                767 : {
                    items: 2,
                },

                992 : {
                    items: 3
                },

                1200 : {
                    items: 3
                },
                1400 : {
                    items: 4
                }
            }
        });
    }

    /*------------------------------------------
        country-carousel
    -------------------------------------------*/
    if($(".Room-carousel".length)) {
        $(".Room-carousel").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            margin: 30,
            nav: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            dots: !1,
            responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 2 }, 1024: { items: 2 }, 1200: { items: 3 } },
        });
    }




    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop:true,
            nav: true,
            navText: ['<i class="fi ti-arrow-left"></i>','<i class="fi ti-arrow-right"></i>'],
            dots: false,
            items: 1
        });
    }  


   

    

     /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


    

    


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
        $(window).on('load', function() {

            preloader();  

            sortingGallery();
            
            
        });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

		if ($(".wpo-site-header").length) {
           stickyMenu( $('.wpo-site-header .navigation'), "sticky-on" );
        }

        toggleBackToTopBtn();

    });


    
   



},3000)

//hero slider on the home page
const handleHeroSlider = () => {

    var menu = [];
    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
}

//service items/utilities
const handleUtilities = () => {

    if ($(".wpo-service-active").length) {
        $(".wpo-service-active").owlCarousel({
            autoplay:true,
            smartSpeed: 300,
            margin:0,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            arrows:false,
            nav: true,
            navText: ['<i class="fi flaticon-left-arrow"></i>','<i class="fi flaticon-next"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    arrows:false,
                    nav: false,
                },

                575 : {
                    items: 1,
                },
                767 : {
                    items: 2,
                },

                992 : {
                    items: 3
                },

                1200 : {
                    items: 4
                }
            }
        });
    }
}

//testimonial slider
const handleTestimonialSlider = () => {

    if ($(".testimonial-slider").length) {
        $(".testimonial-slider").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 30,
            loop:true,
            fade:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            navText: ['<i class="fi ti-arrow-left"></i>','<i class="fi ti-arrow-right"></i>'],
            items: 1,
        });
    }
}

//fun facts
const handleFunFacts = () => {

    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }
}
    

//date pickers
const handleDatePickers = () => {

    $(function() {
        $( "#datepicker" ).datepicker();
    });
        
    $(function() {
        $( "#datepicker2" ).datepicker();
    });

    
}



// Toggle mobile navigation
const toggleMobileNavigation = () => {
    var navbar = $(".navigation-holder");
    var openBtn = $(".mobail-menu .open-btn");
    var xbutton = $(".mobail-menu .navbar-toggler");

    openBtn.on("click", function(e) {
        e.stopImmediatePropagation();
        navbar.toggleClass("slideInn");
        xbutton.toggleClass("x-close");
        return false;
    })

    $("body").on("click", function() {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function() {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function() {
        $('.open-btn').removeClass('x-close');
    });
}

const checkoutFunctions = () => {

    

      // toggle2
      $('#toggle2').on("click", function() {
        $('#open2').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })

    // toggle3
    $('#toggle3').on("click", function() {
        $('#open3').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })
    // toggle4
    $('#toggle4').on("click", function() {
        $('#open4').slideToggle();
        $('.caupon-wrap.s3').toggleClass('coupon-2')
    })

    $('.payment-select .addToggle').on('click', function(){
        $('.payment-name').addClass('active')
        $('.payment-option').removeClass('active')
    })


    $('.payment-select .removeToggle').on('click', function(){
        $('.payment-option').addClass('active')
        $('.payment-name').removeClass('active')
    });
}