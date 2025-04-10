/**
 * ground.js
 * 
 * Handles the ground as a class
 */

import { randInt } from "./globals.js";

export default class Ground {
    constructor() {
        this.image = new Image();
        this.image.src = "../images/dino_large.png";
        this.feedTape = [0, 1100];
        this.aSide = true;
        this.xPos = 0;
    }

    addToFeed() {
        if (aSide) {
            this.feedTape[1] = randInt(0, 1346);
            aSide = false;
        } else {
            this.feedTape[0] = randInt(0, 1346);
            aSide = true;
        }
    }
}
