/* var container = document.getElementsByClassName("container");
for(let i = 0; i < container.length; i++){
    container[i].addEventListener("click", function(){   
        this.style.height = "auto";        
        for(let c = 0; c < container.length; c++){
            if(container[c].classList.contains("-auto")){
                container[c].style.height = "165px";
                container[c].classList.remove("-auto");
            };
        };
        this.classList.add("-auto");
        
    });
};
*/

$(document).ready(function(){

    
    var control = document.getElementsByClassName("control");
    for(let i = 0; i < control.length; i++){
        $(control[i]).click(function(){
            let txt = document.getElementsByClassName("txt");
            $(txt[i]).slideToggle();
            for(j = 0; j < txt.length; j++){
                if(txt[j] != txt[i] && txt[j].classList.contains("-on")){
                    $(txt[j]).slideUp();
                };
            };
            txt[i].classList.add("-on");            
        });
    };

    // hover浮動效果 mouseenter + leave + if(-on)

    //側欄scrool文章

    //文章展開跟隨標題


})

