var phone = document.getElementById("phone");
phone.addEventListener("keydown",function(e){
    if((e.which >= 48 && e.which <= 57)|| e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39){

    }else{
        e.preventDefault();
    }
});


var form = document.getElementById("form");
form.addEventListener("submit", function(e){
    
    let send_data = true;
    let name = document.getElementById("name");
    if(name.value == ""){
        send_data = false;
        name.classList.add("-error");
    }else{
        name.classList.remove("-error");
        send_data = true;
    }

    let email = document.getElementById("email");
    if(is.email(email.value)){
        email.classList.remove("-error");
    }else{
        send_data = false;
        email.classList.add("-error");
    }

    let money = document.getElementById("money");
    if(money.value == ""){
        send_data = false;
        money.classList.add("-error");
    }else{
        money.classList.remove("-error");
        send_data = true;
    }

    let earn = document.getElementById("earn");
    if(earn.value == ""){
        send_data = false;
        earn.classList.add("-error");
    }else{
        earn.classList.remove("-error");
        send_data = true;
    }

    let think = document.getElementById("think");
    if(think.value == ""){
        send_data = false;
        think.classList.add("-error");
    }else{
        think.classList.remove("-error");
        send_data = true;
    }
    
    if(send_data){
        alert("資料已送出，我們將盡快回覆您!");
    }else{
        e.preventDefault();
    }
});

