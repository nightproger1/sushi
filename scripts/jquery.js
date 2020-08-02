$(document).ready(function() {

//sticky-nav
  var waypoint = new Waypoint({
    element: document.getElementById('rest-descript'),
    handler: function(direction) {
      if (direction == "down") {
        $("nav").attr("id", "sticky-nav");
      }
      else {
        $("nav").removeAttr("id");
      }
    },
    offset: 50
  });
  //buttons and links click
   $(".button-order").click(function() {
     $("html, body").animate({scrollTop: $("#order").offset().top}, 1000);
   });
   $(".button-more").click(function() {
     $("html, body").animate({scrollTop: $("#rest-descript").offset().top}, 1000);
   });
   //smooth scroll
   $(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
   });
   });
//animation
   var waypoint = new Waypoint({
     element: document.getElementById('rest-descript'),
     handler: function(direction) {
       $(".anim1").addClass("animate__animated animate__backInDown");
     },
     offset: 120
   });

   var waypoint = new Waypoint({
     element: document.getElementById('cities-sections'),
     handler: function(direction) {
       $(".anim2").addClass("animate__animated animate__rotateIn");
     },
     offset: 250
   });

   var waypoint = new Waypoint({
     element: document.getElementById('order'),
     handler: function(direction) {
       $(".anim3").addClass("animate__animated animate__backInUp");
     },
     offset: 250
   });

   var waypoint = new Waypoint({
     element: document.getElementById('header-text'),
     handler: function(direction) {
       if (direction == "up") {
         $(".anim4").addClass("animate__animated animate__shakeX");
       }
       else {
          $(".anim4").removeClass("animate__animated animate__shakeX");
       }
     },
     offset: 60
   });
// mobile nav
   $(".mobile-icon").click(function() {

     var icon = $(".mobile-icon i");

     if (icon.hasClass("ion-ios-menu")) {
       icon.removeClass("ion-ios-menu");
       icon.addClass("icon ion-ios-close");
        $("nav").animate({height: "300px"}, 500);
     }
     else {
       icon.removeClass("ion-ios-close");
       icon.addClass("icon ion-ios-menu");
        $("nav").animate({height: "70px"}, 500);
     }
     $("#main-nav").slideToggle(500);

   });

});
