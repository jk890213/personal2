$(document).ready(function(){

    var controller = new ScrollMagic.Controller();
    
    var an_talk = new TimelineMax();
    
    
    an_talk.to('#direction', 1, {
        opacity: 0
    
    }).to('.no1', 1, {
        opacity: 1
    
    }).to('.background', 1, {
        scale: 1.2
    
    }).to('.no1', 1, {
        opacity: 0
    
    }).to('.no2', 1, {
        opacity: 1
    
    }).to('.background', 1, {
        scale: 1.35 
    
    }).to('.no2', 1, {
        opacity: 0
    
    }).to('.no3', 1, {
        opacity: 1
    
    }).to('.background', 1, {
        scale: 1.5
    
    }).to('.no3', 1, {
        opacity: 0
    
    }).to('.no4', 1, {
        opacity: 1
    
    }).to('.background', 1, {
        scale: 1.6 
    
    }).to('.no4', 1, {
        opacity: 0
    
    }).to('.no5', 1, {
        opacity: 1
        
    }).to('.button', 1, {
        opacity: 1
        
    });
    
    var scence1 = new ScrollMagic.Scene({
        triggleElement: '.wrap',
        triggleHook: 0,
        duration: '1000%'
    }).setPin('.wrap').setTween(an_talk).addTo(controller);

    $(window).resize(function(){

        

    });

});



// an_talk.to('.no1', 1, {
//     opacity: 1

// }).to('.background', 4, {
//     scale: 1.2

// }).to('.no1', 1, {
//     opacity: 0

// }).to('.no2', 1, {
//     opacity: 1

// }).to('.background', 5, {
//     scale: 1.35 

// }).to('.no2', 1, {
//     opacity: 0

// }).to('.no3', 1, {
//     opacity: 1

// }).to('.background', 5, {
//     scale: 1.5

// }).to('.no3', 1, {
//     opacity: 0

// }).to('.no4', 1, {
//     opacity: 1

// }).to('.background', 5, {
//     scale: 1.6 

// }).to('.no4', 1, {
//     opacity: 0

// }).to('.no5', 1, {
//     opacity: 1

// }).to('.button', 1, {
//     opacity: 1

// });


// var an_background = TweenMax.to('.background', 1, {   
//     scale: 2
// });
// 沒有給觸發場景 動畫會直接觸發



// var scence1 = new ScrollMagic.Scene({
//     triggleElement: '.wrap',
//     triggleHook: 0,
//     duration: '500%'
// }).setPin('.wrap').setTween(an_background).addIndicators().addTo(controller);



// var scence1 = new ScrollMagic.Scene({
//     triggleElement: '.wrap',
//     triggleHook: 0,
//     duration: '500%'
// }).setPin('.wrap').setTween(an_background).setTween(an_talk).addIndicators().addTo(controller);
//setTween 只能有一個