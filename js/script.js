 $(document).ready(function () {

    //Tabgroup
    //Credit to Hamilton from WNM 617
    $(".tabgroup .tab").on("click",function(e){

    var id = $(this).index();

    $(this).addClass("active")
      .siblings().removeClass("active")

    $(this).closest(".tabgroup")
        .find(".content").eq(id)
        .addClass("active")
        .siblings().removeClass("active")
  });
    //nav logo change
    //scroll up
    $(window).scroll(function () {

        if ($(window).scrollTop() > 70) {
            $("header").css("background-color", "rgba(252,252,252,1)");
            $(".nav-color").css("color", "var(--color-black)");
            $(".logo-color").attr('src', './img/logo.svg');
            $(".line-color").css("background-color", "var(--color-black)");
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03)");
        }
        else {
            $("header").css("background-color", "rgba(252,252,252,0)");
            $(".nav-color").css("color", "white");
            $(".logo-color").attr('src', './img/logo_white.svg');
            $(".line-color").css("background-color", "white");
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)");
            
        }

        if ($(window).scrollTop() > 200) {
            $(".scroll-top").css("display", "block");
        }
        else {
            $(".scroll-top").fadeOut(500,function(){
                $(".scroll-top").css("display", "none");
            });
        }

    });

    $("#hamburger").on("click", function() {
        $(".line-color").css("background-color", "var(--color-white)");
    });

    $(".scroll-top").on("click", function() {
        
        $("html,body").animate({scrollTop:$(".top").offset().top},1000,);

    });

    //hamburger menu
    $(".burger-menu").click(function(){
    $(this).toggleClass("active")
    $(".mobile-nav").toggleClass("pv-toggle");
    });



});





$(function(){

    $(".tabgroup .tab").on("click",function(e){
        var i = $(this).index();

        $(this).addClass("active")
            .siblings().removeClass("active");

        $(this).closest(".tabgroup")
            .find(".content").eq(i).addClass("active")
            .siblings().removeClass("active");
	});


    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });


    $(document).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 550);
    });

    $(document).scroll(function () {

        if ($(document).scrollTop() > 950) {
            $(".scroll-top").css("display", "block");
        }
        else {
            $(".scroll-top").fadeOut(400,function(){
                $(".scroll-top").css("display", "none");
            });
        }

    });

    

    $(".scroll-top").on("click", function() {
        
        $("html,body").animate({scrollTop:$(".header_section").offset().top},1000,);

    });





    $(document)
    .on("click","[data-activate]",function(){
        $($(this).data("activate")).addClass("active")
    })
    .on("click","[data-deactivate]",function(){
        $($(this).data("deactivate")).removeClass("active")
    })
    .on("click","[data-toggle]",function(){
        $($(this).data("toggle")).toggleClass("active")
    })



// Moving background
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.imgg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate,
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; 
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

//code by  Oscar Beamish//


/*---------Hide Header on on scroll down--------*/
/*---------Hide Header on on scroll down--------*/
/*---------Hide Header on on scroll down--------*/
/*---------Hide Header on on scroll down--------*/
// learned from http://jsfiddle.net/mariusc23/s6mLJ/31/
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').addClass('header-hide-when-scroll');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('header-hide-when-scroll')
        }
    }
    lastScrollTop = st;
}


// iframe

// Find all iframes
var $iframes = $( "iframe" );
 
// Find &amp;amp;#x26; save the aspect ratio for all iframes
$iframes.each(function () {
  $( this ).data( "ratio", this.height / this.width )
    // Remove the hardcoded width &amp;amp;#x26; height attributes
    .removeAttr( "width" )
    .removeAttr( "height" );
});
 
// Resize the iframes when the window is resized
$( window ).resize( function () {
  $iframes.each( function() {
    // Get the parent container&amp;amp;#x27;s width
    var width = $( this ).parent().width();
    $( this ).width( width )
      .height( width * $( this ).data( "ratio" ) );
  });
// Resize to fix all iframes on page load.
}).resize();
});