$(document).ready(function(){

    $(function(){ $('#scroll').click(function(){ 
        $('html,body').animate({scrollTop:$('#teach').offset().top -50}, 500);});  
    });

    $('#lightSlider').lightSlider({
        item:1,
        loop:true,
        slideMove:1,
        auto: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        // pager: false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
});
