window.addEventListener("load", start);
// start skærmen
function start(){
console.log("Game Start");
document.querySelector("#start_button_container").addEventListener("click", StartSpil);
document.querySelector("#playAgain").addEventListener("click", playAgain);
}

let points;
let lives;

// når spillet starter
function StartSpil(){
  console.log ("spil_start");
  hideAllScreens();
  document.querySelector("#start_screen").classList.add("hidden");
  document.querySelector("#start_button_container").classList.add("hidden");
  points = 0;
  lives = 3;
  updateUI();
  document.querySelector("#blueboard_container").classList.add("fall")
  document.querySelector("#greenboard_container").classList.add("fall")
  document.querySelector("#purpleboard_container").classList.add("fall")
  document.querySelector("#redboard_container").classList.add("fall")
  document.querySelector("#orangeboard_container").classList.add("fall")



  let rndN = Math.floor(Math.random()*4)+1;
  let dly= "delay" + rndN;
  document.querySelector("#blueboard_container").classList.add(dly);
  rndN =Math.floor(Math.random()*4)+1;
  speed= "speed" + rndN;
  document.querySelector("#blueboard_container").classList.add(speed);

  rndN =Math.floor(Math.random()*4)+1;
  dly= "delay" + rndN;
  document.querySelector("#greenboard_container").classList.add(dly)
  rndN =Math.floor(Math.random()*4)+1;
  speed= "speed" + rndN;
  document.querySelector("#greenboard_container").classList.add(speed)

  rndN =Math.floor(Math.random()*4)+1;
  dly= "delay" + rndN;
  document.querySelector("#purpleboard_container").classList.add(dly)
  rndN =Math.floor(Math.random()*4)+1;
  speed= "speed" + rndN;
  document.querySelector("#purpleboard_container").classList.add(speed)

  rndN =Math.floor(Math.random()*4)+1;
  dly= "delay" + rndN;
  document.querySelector("#redboard_container").classList.add(dly)
  rndN =Math.floor(Math.random()*4)+1;
  speed= "speed" + rndN;
  document.querySelector("#redboard_container").classList.add(speed)
  
  rndN =Math.floor(Math.random()*4)+1;
  dly= "delay" + rndN;
  document.querySelector("#orangeboard_container").classList.add(dly)
  rndN =Math.floor(Math.random()*4)+1;
  speed= "speed" + rndN;
  document.querySelector("#orangeboard_container").classList.add(speed)

  // lav en til hvert trick
  document.querySelector("#upside_down_container").classList.add("hidden");
  document.querySelector("#jesus_pose_container").classList.add("hidden");
  document.querySelector("#psycho_container").classList.add("hidden");
  document.querySelector("#crazy_flip_container").classList.add("hidden");
  document.querySelector("#slide_container").classList.add("hidden");


  document.querySelector("#display_lives").textContent=lives;

  document.querySelector("#blueboard_container").addEventListener("mousedown", AddPoint);
  document.querySelector("#greenboard_container").addEventListener("mousedown", AddPoint);
  document.querySelector("#purpleboard_container").addEventListener("mousedown", AddPoint);
  document.querySelector("#redboard_container").addEventListener("mousedown", AddPoint);
  document.querySelector("#orangeboard_container").addEventListener("mousedown", AddPoint);
  
  // lav en af hver til hvert trick click - husk at give dem det rigtige navn - dette giver at hvert board har et reset uden click 
document.querySelector("#blueboard_container").addEventListener("mousedown", trick1);
document.querySelector("#blueboard_container").addEventListener("animationiteration", Resetnoclick);


document.querySelector("#redboard_container").addEventListener("mousedown", trick2);
document.querySelector("#redboard_container").addEventListener("animationiteration", Resetnoclick2)

document.querySelector("#orangeboard_container").addEventListener("mousedown", trick3);
document.querySelector("#orangeboard_container").addEventListener("animationiteration", Resetnoclick3)

document.querySelector("#greenboard_container").addEventListener("mousedown", trick4);
document.querySelector("#greenboard_container").addEventListener("animationiteration", Resetnoclick4)


document.querySelector("#purpleboard_container").addEventListener("mousedown", trick5);
document.querySelector("#purpleboard_container").addEventListener("animationiteration", Resetnoclick5)

}

//trick1 animation

// trick1

function ResetWilliam(){
  document.querySelector("#upside_down_container").classList.remove("trick1");
  document.querySelector("#upside_down_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
console.log(ResetWilliam);
}

function Resetnoclick(){
  console.log(Resetnoclick);
  document.querySelector("#upside_down_container").classList.remove("trick1");
  document.querySelector("#upside_down_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
  RemoveLives();

}

function trick1(){
  document.querySelector("#william_container").classList.add("hidden");
  document.querySelector("#upside_down_container").classList.remove("hidden");
  document.querySelector("#upside_down_container").classList.add("trick1");
  document.querySelector("#blueboard_sprite").classList.add("forsvind");
  AddPoint();
  updateUI();
  document.querySelector("#upside_down_container").addEventListener("animationend", ResetWilliam)
}

//  animation trick2 - husk at de ikke må hedde det samme

function ResetWilliam2(){
  document.querySelector("#jesus_pose_container").classList.remove("trick2");
  document.querySelector("#jesus_pose_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
console.log(ResetWilliam2);

}

function Resetnoclick2(){
  console.log(Resetnoclick2);
  document.querySelector("#jesus_pose_container").classList.remove("trick2");
  document.querySelector("#jesus_pose_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
  RemoveLives();

}


function trick2(){
  document.querySelector("#william_container").classList.add("hidden");
  document.querySelector("#jesus_pose_container").classList.remove("hidden");
  document.querySelector("#jesus_pose_container").classList.add("trick2");
  document.querySelector("#redboard_sprite").classList.add("forsvind");
  AddPoint();
  updateUI();
  document.querySelector("#jesus_pose_container").addEventListener("animationend", ResetWilliam2)
}
//  animation trick3 - husk at de ikke må hedde det samme

function ResetWilliam3(){
  document.querySelector("#psycho_container").classList.remove("trick3");
  document.querySelector("#psycho_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
console.log(ResetWilliam3);

}

function Resetnoclick3(){
  console.log(Resetnoclick3);
  document.querySelector("#psycho_container").classList.remove("trick3");
  document.querySelector("#psycho_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
  RemoveLives();

}

function trick3(){
  document.querySelector("#william_container").classList.add("hidden");
  document.querySelector("#psycho_container").classList.remove("hidden");
  document.querySelector("#psycho_container").classList.add("trick3");
  document.querySelector("#orangeboard_sprite").classList.add("forsvind");
  AddPoint();
  updateUI();
  document.querySelector("#psycho_container").addEventListener("animationend", ResetWilliam3)
}

//  animation trick4 - husk at de ikke må hedde det samme

function ResetWilliam4(){
  document.querySelector("#crazy_flip_container").classList.remove("trick4");
  document.querySelector("#crazy_flip_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
console.log(ResetWilliam4);

}
function Resetnoclick4(){
  console.log(Resetnoclick4);
  document.querySelector("#crazy_flip_container").classList.remove("trick4");
  document.querySelector("#crazy_flip_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
  RemoveLives();

}


function trick4(){
  document.querySelector("#william_container").classList.add("hidden");
  document.querySelector("#crazy_flip_container").classList.remove("hidden");
  document.querySelector("#crazy_flip_container").classList.add("trick4");
  document.querySelector("#greenboard_sprite").classList.add("forsvind");
  AddPoint();
  updateUI();
  document.querySelector("#crazy_flip_container").addEventListener("animationend", ResetWilliam4)
}


//  animation trick5 - husk at de ikke må hedde det samme

function ResetWilliam5(){
  document.querySelector("#slide_container").classList.remove("trick5");
  document.querySelector("#slide_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
console.log(ResetWilliam4);

}
function Resetnoclick5(){
  console.log(Resetnoclick5);
  document.querySelector("#slide_container").classList.remove("trick5");
  document.querySelector("#slide_container").classList.add("hidden");
  document.querySelector("#william_container").classList.remove("hidden");
  RemoveLives();

}

function trick5(){
  document.querySelector("#william_container").classList.add("hidden");
  document.querySelector("#slide_container").classList.remove("hidden");
  document.querySelector("#slide_container").classList.add("trick5");
  document.querySelector("#purpleboard_sprite").classList.add("forsvind");
  AddPoint();
  updateUI();
  document.querySelector("#slide_container").addEventListener("animationend", ResetWilliam5)
  

}




// **************************************************************
// Game over, win, lose and restart game
// **************************************************************

function endGame() {
  // Print function name in console
  console.log("endGame");

  end = true;

  // Hide all screens
  hideAllScreens();
  // Stop all animations
  stopAllAnimations();
  // *************** Added in version 4 ***************
  stopAllSound();

  // tiden er gået - har jeg point nok? --
  // --> vinder : gå til winGame
  // --> Taber (har ikke point nok): gå loseGame

  // hvis jeg mister alle liv--> loseGame
  if (lives === 0) {
    loseGame();
  } else if (points >= 10) {
    winGame();
  } else {
    loseGame();
  }
}


function loseGame() {
  console.log("loseGame");
  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#playAgain").classList.remove("hidden");
  updateUI()
}

 



function winGame() {
  console.log("winGame");
  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#playAgain").classList.remove("hidden");
  updateUI()
}


function updateUI(){
  document.querySelector("#score").textContent = points;
}



function AddPoint() {
  console.log("Add Point");
  points += 1;
  updateUI();
  if (points >= 10) {
    winGame(); // End game when points are sufficient
  }
}

function RemoveLives() {
  console.log("Remove Lives");
  if (lives <= 1) {
    loseGame(); // End game when no lives are left
  } else {
    lives -= 1;
    document.querySelector("#display_lives").textContent = lives;
  }  
}  


function playAgain() {
  console.log("playAgain called");
  
  // Reset game variables
  points = 0;
  lives = 3;
  
  // Update the UI to reflect the reset state
  updateUI();

  // Hide game over and level complete screens
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#start_screen").classList.remove("hidden");

  // Restart the game logic
  StartSpil();
}


// screens and animations

function hideAllScreens(){
document.querySelector("#start_screen").classList.add("hidden")  
document.querySelector("#level_complete").classList.add("hidden")
document.querySelector("#game_over").classList.add("hidden")
}

function stopAllAnimations(){
  document.querySelector("#blueboard_container").classList= "";
  document.querySelector("#greenboard_container").classList= "";
  document.querySelector("#purpleboard_container").classList= "";
  document.querySelector("#redboard_container").classList= "";
  document.querySelector("#orangeboard_container").classList= "";
  document.querySelector("#blueboard_sprite").classList= "";
  document.querySelector("#greenboard_sprite").classList= "";
  document.querySelector("#purpleboard_sprite").classList= "";
  document.querySelector("#redboard_sprite").classList= "";
  document.querySelector("#orangeboard_sprite").classList= "";

};  



function stopAllSound(){};
 


