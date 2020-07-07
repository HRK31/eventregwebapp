// Menu-toggle button

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
    });
  
  //turn off the navBar when clicked on navbar elements
  //toggle navBar icon and hide overImage content
  if ($(window).width()<= 750){
     $(".menu li a").on("click", function() {
      $("nav ul").removeClass("showing");
            $('.menu-icon').find('i').toggleClass('fa-align-justify fa-times');
                  $("#overImg,.register").toggle(1000);
              
    });
       }
       
       
       
        //toggle navBar icon and hide overImage content
   /* $('.menu-icon').click(function(){
      ide();
        $('.menu-icon').find('i').toggleClass('fa-align-justify fa-times');
     
          $("#overImg,.register").toggle(1000);
      }); */
  
    /* function ide() {
     $('.menu-icon').find('i').toggleClass('fa-align-justify fa-times');
     
          $("#overImg,.register").toggle(1000);
       }  */
       
       
       
       
       
       
    // Scrolling Effect
    $(window).on("scroll", function() {
      if( ($(window).scrollTop())>200) {
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
    })
    
    
      
    //toggle navBar icon and hide overImage content
    $('.menu-icon').click(function(){
      //ide();
        $('.menu-icon').find('i').toggleClass('fa-align-justify fa-times');
     
          $("#overImg,.register").toggle(1000);
      });
      
  
    /* function ide() {
     $('.menu-icon').find('i').toggleClass('fa-align-justify fa-times');
     
          $("#overImg,.register").toggle(1000);
       }  */
      
  
  
  new TypeIt('#overImg', {
          strings:[ "Participate in the most fabulous & exciting event in the history!"," D-Day is waiting for you."],speed:50,cursor:false
        }).go();
  
  
  
  
  
  
  /*
  // var ht=(($(window).height())/2);
   
    $(window).scroll(function() {
      if ($(document).scrollTop() > 200) {
           $("#overImg,.register").hide(1000);
      } 
          if ($(document).scrollTop() < 200) {
           $("#overImg,.register").show(1000);
      } 
          
    });
    */
  
  
  /* $("button").click(function(){   */
      $("nav").css("z-index", "100");
    /* });  */
  
  
  
  
  
  
  
  
  
  
  
  
  });
  
  