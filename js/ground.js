/**
 * ground.js
 * 
 * Handles the ground as a class
 */

import { randInt } from "./globals.js";

export default class Ground {
    constructor() {
        this.feedTape = [0, 1100];
        this.aSide = true;
        this.xPos = 0;
    }

    addToFeed() {
        if (this.aSide) {
            this.feedTape[1] = randInt(0, 1346);
            this.aSide = false;
        } else {
            this.feedTape[0] = randInt(0, 1346);
            this.aSide = true;
        }
    }
}
