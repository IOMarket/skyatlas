$(document).ready(function() {
	"use strick"


//------------------------Smooth Page Scrolling----------//
	$(function() {

	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 300);
	        return false;
	      }
	    }
	  });
	});

//------------------------Fire Fly----------//
	$(function(){
          $.firefly({
          	color: '#777777',
			minPixel: 1,
			maxPixel: 2,
			total : 150,
			on: 'body',

          });
     });





//------------------------CountDown Timer----------//

			var currentDate = new Date(),
                finished = false,
                availiableExamples = {
                    set35daysFromNow: 36 * 24 * 60 * 60 * 1000,
                    set5minFromNow: 5 * 60 * 1000,
                    set1minFromNow: 1 * 60 * 1000
                };

            function callback(event) {
                $this = $(this);
                $this.find('span#' + event.type).html(event.value);
                switch (event.type) {
                    case "seconds":
                    case "minutes":
                    case "hours":
                    case "days":
                    case "weeks":
                    case "daysLeft":
                    case "finished":
                }
            }

            $('div#clock').countdown(availiableExamples.set35daysFromNow + currentDate.valueOf(), callback);



//------------------------Services Slider----------//

	$(function(){
		$("#services-slider").owlCarousel({
	 
				pagination: true,
			    items : 4,
			    itemsDesktop : [1199,3],
			    itemsDesktopSmall : [979,3]
			 
		});
	});

	//------------------------disable mouse Scrolling----------//
		$('body').addClass('stop-scrolling')

	//------------------------wow js----------//

	new WOW().init();


	//------------------------Morphing button with form----------//

	(function() {
		var docElem = window.document.documentElement, didScroll, scrollPosition;

		// trick to prevent scrolling when opening/closing button
		function noScrollFn() {
			window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
		}

		function noScroll() {
			window.removeEventListener( 'scroll', scrollHandler );
			window.addEventListener( 'scroll', noScrollFn );
		}

		function scrollFn() {
			window.addEventListener( 'scroll', scrollHandler );
		}

		function canScroll() {
			window.removeEventListener( 'scroll', noScrollFn );
			scrollFn();
		}

		function scrollHandler() {
			if( !didScroll ) {
			didScroll = true;
			setTimeout( function() { scrollPage(); }, 60 );
			}
		};

		function scrollPage() {
			scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
			didScroll = false;
		};

		scrollFn();

		[].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function( bttn ) {
			new UIMorphingButton( bttn, {
				closeEl : '.icon-close',
				onBeforeOpen : function() {
					// don't allow to scroll
					noScroll();
				},
				onAfterOpen : function() {
					// can scroll again
					canScroll();
				},
				onBeforeClose : function() {
					// don't allow to scroll
					noScroll();
				},
				onAfterClose : function() {
					// can scroll again
					canScroll();
				}
			} );
		} );

		// for demo purposes only
		[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
			bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		} );

	})();


});