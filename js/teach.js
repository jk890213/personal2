
$(document).ready(function(){

    
    var control = document.getElementsByClassName("control");
    for(let i = 0; i < control.length; i++){
        $(control[i]).click(function(){
            let txt = document.getElementsByClassName("txt");
            $(txt[i]).slideToggle();
            // if(txt[i].classList.contains("-open")){
            //     $(txt[i]).slideUp();
            //     txt[i].classList.remove("-open");
            // }else{
            //     $(txt[i]).slideDown();
            //     txt[i].classList.add("-open");
                
            // };
            
            
            for(j = 0; j < txt.length; j++){
                if(txt[j] != txt[i] && txt[j].classList.contains("-open")){
                    $(txt[j]).slideUp();
                    txt[j].classList.remove("-open");
                };
            };

            // setTimeout(function(){
            //     $('html,body').animate({scrollTop:$(control[i]).offset().top}, 500);
            // });
            

        });

        control[i].addEventListener("mouseenter", function(){
            let txt = document.getElementsByClassName("txt");
            if(txt[i].classList.contains("-open")){

            }else{
                control[i].style.height = "150px";
                // control[i].style.marginTop = "-15px";
            };
                        
        });

        control[i].addEventListener("mouseleave", function(){
            let txt = document.getElementsByClassName("txt");
            if(txt[i].classList.contains("-open")){

            }else{
                // control[i].removeAttribute("style");
                control[i].style.height = "132px";                
            };
                        
        });


    };

    
    
    
    //文章展開跟隨標題

    
    var index = document.getElementsByClassName("index");
    for(let i = 0;i < index.length; i++){
        
        $(function(){ $(index[i]).click(function(){ 
            $('html,body').animate({scrollTop:$(control[i]).offset().top}, 500);});  
        });
    };    
    


})

