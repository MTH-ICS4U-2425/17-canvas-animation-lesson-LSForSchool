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

  constructor() {
    this.position = {
      x: 1100 + randInt(0, 50),
      y: 180
    }

    if (this.cactusGen == 0) {
      this.srcX = 446;
      this.srcY = 2;
      this.srcW = 33;
      this.srcH = 69;
    } else if (this.cactusGen == 1) {
      this.srcX = 446;
      this.srcY = 2;
      this.srcW = 33;
      this.srcH = 69;
    } else if (this.cactusGen == 2) {
      this.srcX = 446;
      this.srcY = 2;
      this.srcW = 33;
      this.srcH = 69;
    } else if (this.cactusGen == 3) {
      this.srcX = 446;
      this.srcY = 2;
      this.srcW = 33;
      this.srcH = 69;
    } else if (this.cactusGen == 4) {
      this.srcX = 446;
      this.srcY = 2;
      this.srcW = 33;
      this.srcH = 69;
    } else if (this.cactusGen == 5) {
      this.srcX = 446;
      this.srcY = 2;
      this.srcW = 33;
      this.srcH = 69;
    }
  }
}