// Enemies our player must avoid
"use strict";
let playerPositionY = 400;
let playerPositionX = 200;

var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy1.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x >= 505) {
    this.x = 0
  }
  if (playerPositionX < this.x + 60 && playerPositionX + 60 > this.x && playerPositionY < this.y + 60 && playerPositionY + 60 > this.y) {
    player.x = 200;
    player.y = 400;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var allEnemies = [];
// enemyYposition is the y position of each enemy
var enemyYposition = [80, 160, 240];
// passing the parameters in the new Enemy object 1.Xposition, 2.Yposition, speed which is generated randomly
enemyYposition.map(y => {
  var enemy = new Enemy(0, y, Math.random() * 505)
  allEnemies.push(enemy)
})
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/thor.png';
}

// created new object for the Player and passed initial x and y positions of the player
var player = new Player(200, 400);

Player.prototype.update = (dt) => {

}
// this fallowing is ussed to draw the player image on the canvas
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// handleInput is used to get the user pressed key and based on key value change the player position
Player.prototype.handleInput = function(key) {

  if (key == 'left' && this.x > 0) {
    this.x = this.x - 100;
    playerPositionX = this.x;
  }
  if (key == 'right' && this.x < 400) {
    this.x = this.x + 100;
    playerPositionX = this.x;
  }
  if (key == 'up' && this.y > 0) {
    this.y = this.y - 83;
    playerPositionY = this.y;
  }
  if (key == 'down' && this.y < 400) {
    this.y = this.y + 83;
    playerPositionY = this.y;
  }
  // if the played tuch the top level then player win the game and start from the bigining
  if (this.y < 60) {
    // setTimeout(() => {
      swal({
        title:"You won the game",
         icon: "success"
      }
    ).then(confirm=>{location.reload()})
      // location.reload();
    // }, 200)
  // }
}
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
