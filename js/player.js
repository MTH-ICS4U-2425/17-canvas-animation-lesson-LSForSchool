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
  crouching = false;
  stepCount = 0;

  alive = false;

  xPixel = 1854;
  yPixel = 2;
  hPixel = 87;
  wPixel = 93;
  
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
    this.requestPixels();
    CTX.drawImage(IMAGE, this.xPixel, this.yPixel, this.wPixel, this.hPixel, this.position.x, this.position.y, this.width, this.height);
    this.stepCount++;
  }

  requestPixels() {
    if (this.stepCount < 5) {
      if (this.crouching) { 
        this.xPixel = 2206;
        this.yPixel = 36;
        this.wPixel = 117;
        this.hPixel = 70;
      } else {
        this.xPixel = 1854;
        this.yPixel = 2;
        this.wPixel = 87;
        this.hPixel = 93;
      }
    } else {
      if (this.crouching) {
        this.xPixel = 2324;
        this.yPixel = 36;
        this.wPixel = 117;
        this.hPixel = 70;
      } else {
        this.xPixel = 1942;
        this.yPixel = 2;
        this.wPixel = 87;
        this.hPixel = 93;
      }
    }

    if (!this.grounded && !this.crouching) {
        this.xPixel = 1678;
        this.yPixel = 2;
        this.wPixel = 87;
        this.hPixel = 93;
    }
  }
  
  jump() {
    if (this.grounded && !this.crouching) {
      this.grounded = false;
      this.position.y -= 5;
      this.velocity.y = -20;
      
      // this.crouching = false; // Use this line of code if it's better to be able to jump out of a crouch
    }
  }

  crouch() {
    this.crouching = true;

    this.width = 78;
    this.height = 47;
    this.position.y += 15;

    if (!this.grounded) {
      this.velocity.y = 14;
    }

  }
  
  uncrouch() {
    this.width = 58;
    this.height = 62;
    this.crouching = false;
  }
}