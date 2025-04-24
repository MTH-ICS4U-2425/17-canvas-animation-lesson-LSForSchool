/**
 * ICS4U - Mr. Brash 🐿️
 * 
 * 17 - Canvas Animation
 * 
 * Author: Luke Smith
 * 
*/

'use strict';

import Player from "./player.js";
import Ground from "./ground.js";
import Cactus from "./cactus.js";
import { CANVAS, CTX, MS_PER_FRAME, KEYS, IMAGE } from "./globals.js";

// Globals
const HERO = new Player(100, 180, 58, 62);
const GROUND = new Ground();

let frame_time = performance.now()


// Event Listeners
document.addEventListener("keydown", keypress);
document.addEventListener("keyup", keyunpress);

CANVAS.addEventListener("click", startGame);

// Disable the context menu on the entire document
document.addEventListener("contextmenu", (event) => { 
  event.preventDefault();
  return false; 
});

/**
 * The user pressed a key on the keyboard 
*/
function keypress(event) {
  if ([KEYS.W, KEYS.UP_ARROW, KEYS.SPACE].includes(event.keyCode)) {
    HERO.jump();
  }
  
  if ([KEYS.S, KEYS.DOWN_ARROW].includes(event.keyCode)) {
    HERO.crouch();
  }

  if (event.keyCode == KEYS.ENTER) {
    startGame();
  }
}

function keyunpress(event) {
  if ([KEYS.S, KEYS.DOWN_ARROW].includes(event.keyCode)) {
    HERO.uncrouch();
  }
}


/**
 * The main game loop
*/
function update() {
  // Prepare for the next frame
  requestAnimationFrame(update)
  
  /*** Desired FPS Trap ***/
  const NOW = performance.now()
  const TIME_PASSED = NOW - frame_time
  
  if (TIME_PASSED < MS_PER_FRAME) return
  
  const EXCESS_TIME = TIME_PASSED % MS_PER_FRAME
  frame_time = NOW - EXCESS_TIME
  /*** END FPS Trap ***/
  
  // Clear the canvas
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
  // Draw the ground
  CTX.drawImage(IMAGE, 0, 102, 2300, 26, GROUND.xPos, 300, 2300, 26);
  CTX.drawImage(IMAGE, 0, 102, 2300, 26, GROUND.xPos + GROUND.feedTape[0] + 2200, 300, 2300, 26);
  CTX.drawImage(IMAGE, 0, 102, 2300, 26, GROUND.xPos + GROUND.feedTape[0] + GROUND.feedTape[1] + 4400, 300, 2300, 26);
  
  if (GROUND.xPos == -2200) {
    GROUND.addToFeed();
  }
  
  GROUND.xPos -= 5;
  
  // Draw our hero
  HERO.update();
}

function splashScreen() {
  CTX.drawImage(IMAGE, 1678, 2, 87, 93, 100, 180, 58, 62); // Draws the sample player
  CTX.drawImage(IMAGE, 0, 102, 2300, 26, GROUND.xPos, 300, 2300, 26); // Draws the ground

  let cactus = new Cactus();
  CTX.drawImage(IMAGE, cactus.srcX, cactus.srcY, cactus.srcH, cactus.srcW, 200, 180, 58, 62)
}

function startGame() {
  requestAnimationFrame(update);

  HERO.grounded = true;
  HERO.crouching = false;
  HERO.jump();
}

// Show the splash screen
IMAGE.src = "../images/dino_large.png";
IMAGE.onload = splashScreen;

