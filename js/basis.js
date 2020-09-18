// jQuery 版本：DOM 載入完成之後執行
$(function(){

    // hamburger icon 的切換
    $("button.hamburger").on("click", function(){
        $(this).toggleClass("is-active");
        let nav = document.getElementsByClassName("nav");
        nav[0].style.transform = "translate 0";
    });

});