var controller = new ScrollMagic.Controller();
var an_talk = new TimelineMax();

// an_talk.to('.no1', 1, {
//     // scale: 1
//     y: -200

// }).to('.background', 1, {
//     scale: 2  

// }).to('.no2', 1, {
//     // scale: 1
//     y: -300

// }).to('.background', 1, {
//     scale: 1.2   

// }).to('.no3', 1, {
//     // scale: 1
//     y: -400

// }).to('.background', 1, {
//     scale: 1.3   

// }).to('.no4', 1, {
//     // scale: 1
//     y: -500

// }).to('.background', 1, {
//     scale: 1.4    

// }).to('.no5', 1, {
//     // scale: 1
//     y: -600

// });


an_talk.to('.no1', 1, {
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


// var an_background = TweenMax.to('.background', 1, {   
//     scale: 2
// });
//沒有給觸發場景 動畫會直接觸發

var scence1 = new ScrollMagic.Scene({
    triggleElement: '.wrap',
    triggleHook: 0,
    duration: '1000%'
}).setPin('.wrap').setTween(an_talk).addIndicators().addTo(controller);


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


// var an_background = TweenMax.fromTo('.background', 1, {
//     scale: 1
// }, {
//     scale: 2
// });






