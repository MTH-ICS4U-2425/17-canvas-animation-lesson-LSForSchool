/**
 * cactus.js
 * 
 * The cacti handler
 * 
 * Author: Luke Smith
 */

import { randInt } from "./globals.js"

export default class Cactus {
  xVelocity = 0;
  cactusGen = randInt(0, 6);

  width = 0;
  height = 0;

  srcX = 0;
  srcY = 0;
  srcW = 0;
  srcH = 0;

  position = {
    x: 0,
    y: 0
  }

  constructor() { 
    // Makes the x position a bit more random
    this.position.x = 1100 + randInt(0, 100);

    if (this.cactusGen == 0) {
      this.srcX = 446;
      this.srcY = 2;
      this.srcW = 33;
      this.srcH = 69;

      this.position.y = 270;
    } else if (this.cactusGen == 1) {
      this.srcX = 480;
      this.srcY = 2;
      this.srcW = 67;
      this.srcH = 69;
      
      this.position.y = 270;
    } else if (this.cactusGen == 2) {
      this.srcX = 548;
      this.srcY = 2;
      this.srcW = 101;
      this.srcH = 69;
      
      this.position.y = 270;
    } else if (this.cactusGen == 3) {
      this.srcX = 652;
      this.srcY = 2;
      this.srcW = 49;
      this.srcH = 99;

      this.position.y = 250;
    } else if (this.cactusGen == 4) {
      this.srcX = 702;
      this.srcY = 2;
      this.srcW = 100;
      this.srcH = 99;

      this.position.y = 250;
    } else if (this.cactusGen == 5) {
      this.srcX = 802;
      this.srcY = 2;
      this.srcW = 149;
      this.srcH = 99;

      this.position.y = 250;
    }
  }
}