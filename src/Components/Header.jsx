import React, { useEffect } from 'react';
// import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';

const Header = () => {

//   useEffect(() => {
//     const wow = new WOW.WOW({
//       boxClass: 'wow', // default value
//       animateClass: 'animated', // default value
//       offset: 0, // default value
//       mobile: true, // default value
//       live: true // default value
//     });
//     wow.init();
//   }, []);

  useEffect(()=>{
    (function ($) {
	
    
      // Header Type = Fixed
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();
    
        if (scroll >= box - header) {
          $("header").addClass("background-header");
        } else {
          $("header").removeClass("background-header");
        }
      });
    
      // Menu Dropdown Toggle
      if($('.menu-trigger').length){
        $(".menu-trigger").on('click', function() { 
          $(this).toggleClass('active');
          $('.header-area .nav').slideToggle(200);
        });
      }
    
    
     // Menu elevator animation
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
      if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          var width = $(window).width();
          if(width < 991) {
            $('.menu-trigger').removeClass('active');
            $('.header-area .nav').slideUp(200);  
          }       
          $('html,body').animate({
            scrollTop: (target.offset().top) + 1
          }, 700);
          return false;
        }
      }
    });
    
      $(document).ready(function () {
          $(document).on("scroll", onScroll);
          
          //smoothscroll
          $('.scroll-to-section a[href^="#"]').on('click', function (e) {
              e.preventDefault();
              $(document).off("scroll");
              
              $('.scroll-to-section a').each(function () {
                  $(this).removeClass('active');
              })
              $(this).addClass('active');
            
              var target = this.hash,
              menu = target;
              var target = $(this.hash);
              $('html, body').stop().animate({
                  scrollTop: (target.offset().top) + 1
              }, 500, 'swing', function () {
                  window.location.hash = target;
                  $(document).on("scroll", onScroll);
              });
          });
      });
    
      function onScroll(event){
          var scrollPos = $(document).scrollTop();
          $('.nav a').each(function () {
              var currLink = $(this);
              var refElement = $(currLink.attr("href"));
              if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                  $('.nav ul li a').removeClass("active");
                  currLink.addClass("active");
              }
              else{
                  currLink.removeClass("active");
              }
          });
      }
    
    
    
      // // Page loading animation
      //  $(window).on('load', function() {
    
      //       $('#js-preloader').addClass('loaded');
    
      //   });
    
      
    
      // Window Resize Mobile Menu Fix
      function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function() {
          if(width < 767) {
            $('.submenu ul').removeClass('active');
            $(this).find('ul').toggleClass('active');
          }
        });
      }
    
    
    
    
    })(window.jQuery);
  },[]);

  return (
    <>
<header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          <Link to="/" className="logo">
            <h4>SC<span>Boost</span></h4>
          </Link>
          <ul className="nav">
            {/* <li className="scroll-to-section"><Link  to="/" className="active">Home</Link></li> */}
            <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
            <li className="scroll-to-section"><a href="#about">About Us</a></li>
            <li className="scroll-to-section"><a href="#services">Services</a></li>
            <li className="scroll-to-section"><a href="#portfolio">Features</a></li>
            <li className="scroll-to-section"><a href="#pservices">Pricing</a></li>
            <li className="scroll-to-section"><a href="#testimonial">Testimonial</a></li> 
            <li className="scroll-to-section"><div className="main-red-button"><a href="#contact">Contact Now</a></div></li> 
          </ul>        
          <span className='menu-trigger'>
              <span>Menu</span>
          </span>
        </nav>
      </div>
    </div>
  </div>
</header>


    </>
  )
}

export default Header;