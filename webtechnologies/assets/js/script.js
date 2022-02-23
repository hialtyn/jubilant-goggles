function scrollToDown() {
           window.scrollTo(900, 900);
       }
//Mouseover
$(document).ready(function(){
  $("h2").mouseover(function(){
    $("h2").css("color", "#D3D3D3");
  });
  $("h2").mouseout(function(){
    $("h2").css("color", "#000000");
  });
});
//Keydown
$(document).ready(function(){
  $("input").keydown(function(){
    $("input").css("background-color", "#ffff00");
  });
  $("input").keyup(function(){
    $("input").css("background-color", "#000000");
  });
});
//animation
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //Sound
function play(){
  var audio = new Audio('assets/audio/audio.mp3');
  audio.play();
};
