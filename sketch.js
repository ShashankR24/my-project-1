var spiderMan, spiderManAnimation, invisibleGround, carnageAnimation, venomAnimation, lizardAnimation, electroAnimation, rockImage, cloudImage, spiderManJumpingAnimation;
var gameState = "story";
var playButton, controlButton, playButtonImage, controlButtonImage;
var electroGroup, lizardGroup, carnageGroup, venomGroup, platformGroup;
var rockGroup, cloudGroup;
var gameOver, gameOverImage, reset, resetImage;
var score = 0;
var coinGroup, coinImage;
var rand;
var groundImage;
var backGround, backGroundImage;
var ground;
var fireBall,fireBallImage
function preload() {
  groundImage = loadImage("ground-1.png");
  backGroundImage = loadImage("the background.png");
  coinImage = loadImage("coin sprite.png");
  gameOverImage = loadImage("game over.png");
  resetImage = loadImage("restart.png");
  spiderManJumpingAnimation = loadAnimation("spider man jumping_6.png", "spider man jumping_7.png")
  controlButtonImage =  loadImage("controls button.png");
  playButtonImage = loadImage("play button.png");
  cloudImage = loadImage("cloud.png");
  rockImage = loadImage("rock.png");
  fireBallImage = loadImage("Fireball.png")

  spiderManAnimation = loadAnimation("spider man running_1.png", "spider man running_2.png", "spider man running_3.png", "spider man running_4.png", "spider man running_5.png", "spider man running_6.png", "spider man running_7.png", "spider man running_8.png", "spider man running_9.png", "spider man running_10.png", "spider man running_11.png");               
  
  
  carnageAnimation = loadAnimation("carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png","carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png",  "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png");
  
  venomAnimation = loadAnimation("venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png");
  
  lizardAnimation = loadAnimation("lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard kick 1.png", "lizard kick 2.png", "lizard kick 3.png", "lizard kick 4.png", "lizard kick 4.png", "lizard kick 4.png");
  
  electroAnimation = loadAnimation("electro walking_1.png", "electro walking_2.png", "electro walking_3.png", "electro walking_4.png", "electro walking_5.png", "electro walking_6.png", "electro walking_7.png", "electro walking_8.png", "electro walking_9.png", "electro walking_10.png");
