
// document.querySelector("button").addEventListener("click",function (){
//     alert("I got clicked");
// });

var numberOfDrum = document.querySelectorAll(".drum").length;
for(var i = 0;i < numberOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        
    })
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
});

function makeSound(key){
  switch(key){
    case "w" :
        //alert("I got clicked : w");
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;
    case "a" :
        //alert("I got clicked : a");
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();

      break;
    case "s" :
        //alert("I got clicked : s");
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      break;
    case "d" :
        //alert("I got clicked : d");
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;
    
      case "j" :
        //alert("I got clicked : j");
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;

    case "k" :
        //alert("I got clicked : k");
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      break;
    case "l" :
        //alert("I got clicked : l");
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;
    default:
        alert("I got clicked : default");
}
}





