var canvas, backgroundImage;
var player1, player2;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
// var carImg1, carImg2, carImg3, carImg4;
 var /*trackImg,*/ groundImg;
var form, player, game;

// var cars, car1, car2, car3, car4;

function preload(){
  // carImg1 = loadImage("car1.png")
  // carImg2 = loadImage("car2.png")
  // carImg3 = loadImage("car3.png")
  // carImg4 = loadImage("car4.png")

  // trackImg = loadImage("track.jpg")
  groundImg = loadImage("track.png")

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
