(function ($) {
    "use strict";

    jQuery(document).ready(function($){

        //scroll
        $('.scrollto, .nav.navbar-nav li a').on('click', function (event) {
            $('.main-menu li a').parent().removeClass('active');
            var $anchor = $($(this).attr('href')).offset().top - 60;
            $(this).parent().addClass('active');
            $('body, html').animate({scrollTop: $anchor}, 600);
            event.preventDefault();
            return false;
        });
        // Cache selectors
        var topMenu = $(".nav.navbar-nav"),
            topMenuHeight = topMenu.outerHeight() + 15,
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function () {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });

        // Bind to scroll
        $(window).scroll(function () {
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        });

        //typed
        Typed.new("#typed", {
            stringsElement: document.getElementById('typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function () {
                foo();
            },
            resetCallback: function () {
                newTyped();
            }
        });

        var resetElement = document.querySelector('.reset');
        if (resetElement) {
            resetElement.addEventListener('click', function () {
                document.getElementById('typed')._typed.reset();
            });
        }


        function newTyped() { /* A new typed object */
        }

        function foo() {
            console.log("Callback");
        }

        //stickynav
        $(".navbar-sticy-top").sticky({topSpacing: 0});

        //preloader
        window.onload = function () {
            setInterval(function () {
                $(".preloader").fadeOut("slow");
            }, 4);
        };

        //owlcarousel
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });

        //Portfolio
        $(function () {

            var filterList = {

                init: function () {

                    $('#portfoliolist').mixItUp({
                        selectors: {
                            target: '.portfolio',
                            filter: '.filter'
                        },
                        load: {
                            filter: '.app'
                        }
                    });
                },

                init_two: function () {
                    $('#portfolio_skill_list').mixItUp({
                        selectors: {
                            target: '.portfolio-skill',
                            filter: '.filter-skill'
                        },
                        load: {
                            filter: '.back-end'
                        }
                    });
                }


            };

            // Run the show!
            filterList.init();
            filterList.init_two();


        });


























         // We will be using MixItUp's 'changeLayout' API method to add and remove a 'list' class to the container. This class changes the styling of our target elements (see CSS).
  
 // NB: Changing layout doesn't have to be between grid/list only, we can add any class we want and use it to affect the styling of our elements.

$(function(){

  var layout = 'list', // Store the current layout as a variable
      $container = $('#Container'), // Cache the MixItUp container
      $changeLayout = $('#ChangeLayout'); // Cache the changeLayout button
  
  // Instantiate MixItUp with some custom options:
  
  $container.mixItUp({
    animation: {
      animateChangeLayout: true, // Animate the positions of targets as the layout changes
      animateResizeTargets: true, // Animate the width/height of targets as the layout changes
      effects: 'fade rotateX(-40deg) translateZ(-100px)'
    },
    layout: {
      containerClass: 'list' // Add the class 'list' to the container on load
    }
  });
  
  // MixItUp does not provide a default "change layout" button, so we need to make our own and bind it with a click handler:
  
  $changeLayout.on('click', function(){
    
    // If the current layout is a list, change to grid:
    
    if(layout == 'list'){
      layout = 'grid';
      
      $changeLayout.text('List'); // Update the button text
      
      $container.mixItUp('changeLayout', {
        containerClass: layout // change the container class to "grid"
      });
      
    // Else if the current layout is a grid, change to list:  
    
    } else {
      layout = 'list';
      
      $changeLayout.text('Grid'); // Update the button text
      
      $container.mixItUp('changeLayout', {
        containerClass: layout // Change the container class to 'list'
      });
    }
  });
  
});












    });

})(jQuery);