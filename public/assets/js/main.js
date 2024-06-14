// (function($){
//     //===== Mobile Menu 
    
//     $(".navbar-toggler").on('click', function() {
//         $(this).toggleClass('active');
//     });
    
//     $(".navbar-nav a").on('click', function() {
//         $(".navbar-toggler").removeClass('active');
//     });
    
    
//     //===== close navbar-collapse when a  clicked
    
//     $(".navbar-nav a").on('click', function () {
//         $(".navbar-collapse").removeClass("show");
//     });
    
    
//     //===== Sticky
    
//     $(window).on('scroll', function(event) {    
//         var scroll = $(window).scrollTop();
//         if (scroll < 10) {
//             $(".navigation").removeClass("sticky");
//         } else{
//             $(".navigation").addClass("sticky");
//         }
//     });
    
    
//     //===== Section Menu Active

//     var scrollLink = $('.page-scroll');
//         // Active link switching
//         $(window).scroll(function() {
//         var scrollbarLocation = $(this).scrollTop();

//         scrollLink.each(function() {

//           var sectionOffset = $(this.hash).offset().top - 73;

//           if ( sectionOffset <= scrollbarLocation ) {
//             $(this).parent().addClass('active');
//             $(this).parent().siblings().removeClass('active');
//           }
//         });
//     });
    
    
    
// }(jQuery));