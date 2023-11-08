// jq 
$(document).ready(function(){



$('.review').slick({
   centerMode: true,
   centerPadding:"0",
   infinite:true,
   slidesToShow: 3,
   slidesToScroll:1,
   speed: 1000,
   autoplay: true,
   autoplaySpeed: 5000,
 

  responsive: [
   
 {
      breakpoint: 991,
      settings: {
         arrows: false,
        centerMode: true,
        
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
     {

      breakpoint: 575,
      settings: {
      	 arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    
  ]
});



	});

