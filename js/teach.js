var container = document.getElementsByClassName("container");
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

