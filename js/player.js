/**
 * player.js
 * 
 * The Player Class
 * 
 * Acts as a sprite or "hero" for the game
 * 
 * Author: Luke Smith
 */

import { CTX, CANVAS, GRAVITY, FLOOR, IMAGE } from "./globals.js"

export default class Player {
  grounded = true;
  stepCount = 0;
  
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;

    this.position = {
      x: x,
      y: y
    }
    this.velocity = {
      x: 0,
      y: 0
    };
  }

  get right() { return this.position.x + this.width; }
  get bottom() { return this.position.y + this.height; }
  get left() { return this.position.x; }
  get top() { return this.position.y; }

  /**
   * Main function to update location, velocity, and image
   */
  update() {
    if (this.bottom < FLOOR) {
      this.velocity.y += GRAVITY;
    }
    
    if (this.bottom + this.velocity.y >= FLOOR) {
      this.velocity.y = 0;
      this.position.y = FLOOR - this.height;
      this.grounded = true;
    }
    
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y + GRAVITY;
    
    if (this.stepCount >= 10) {
      this.stepCount = 0;
    }
    
    this.draw();
  }

  /**
   * Draw the player on the canvas
   */
  draw() {
    if (this.stepCount < 5) {
      CTX.drawImage(IMAGE, 1678, 2, 87, 93, this.position.x, this.position.y, this.width, this.height);
      this.stepCount++;
    } else {
      CTX.drawImage(IMAGE, 1400, 2, 87, 93, this.position.x, this.position.y, this.width, this.height);
      this.stepCount++;
    }
  }

  jump() {
    if (this.grounded) {
      this.grounded = false;
      this.position.y -= 5;
      this.velocity.y = -20;
    }
  }
}