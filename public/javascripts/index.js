$(document).ready(function () {
  var latti,longi;
   navigator.geolocation.getCurrentPosition(function(position){
         var lt = position.coords.latitude;
         var lng = position.coords.longitude;
         document.querySelector("[name='latitude']").value = lt;
         document.querySelector("[name='longitude']").value = lng;  
         console.log(position.coords)
     });

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });