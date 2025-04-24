/**
 * ground.js
 * 
 * Handles the ground as a class
 */

import { randInt } from "./globals.js";

export default class Ground {
  constructor() {
    this.feedTape = [0, -1100];
    this.aSide = true;
    this.xPos = 0;
  }

  addToFeed() {
    if (this.aSide) {
      this.aSide = false;
      this.feedTape[1] = randInt(-1346, 0);
    } else {
      this.aSide = true;
      this.feedTape[0] = randInt(-1346, 0);
    }

    this.xPos = 0;
  }
}
