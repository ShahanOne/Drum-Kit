
/* Detecting for button press */
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons ; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);                             //calling a predefined function
       buttonAnimation(buttonInnerHTML);
  });
}

/* Detecting for key press*/

document.addEventListener("keydown" , function(event) {        // Here event is just a name , the function will give all the information
  makeSound(event.key);                                        // about the activity that got performed
 buttonAnimation(event.key);                                   // by giving the function a name , we can grasp the info we want
});                                                            // key is one of them properties


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");               // notice A is capital ,,, Audio is actually a constructor function
      tom1.play();                                            // like: function Audio (fileLocation) {
      break;                                                  //}

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("kick-bass.mp3");
      kickBass.play();
      break;


    default:
      console.log("go away")                                     // there's no point of this since there isnt another possibilty , but just do it.

  }

}

function buttonAnimation(currentKey) {
  var keyBeingPressed = document.querySelector("." + currentKey);

  keyBeingPressed.addEventListener("onmouseup", keyBeingPressed.classList.add("pressed") );

  setTimeout(function () {                                      //timeout function
    keyBeingPressed.classList.remove("pressed")
  } , 100);                                                     //100 miliseconds wait before execution

}
