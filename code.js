var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["16dd18f9-5d18-4b81-8edf-c58381ee76e6","607f87ee-573c-443d-8b5c-cd19adff12ed","ad88a6ba-40d8-4f80-89b6-4b1558d4f8f3"],"propsByKey":{"16dd18f9-5d18-4b81-8edf-c58381ee76e6":{"name":"alienGreen_badge_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":60,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"607f87ee-573c-443d-8b5c-cd19adff12ed":{"name":"flat_medal1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2BhxUqv84l510kT5Gi5ccxngIL.cRWk4/category_gameplay/flat_medal1.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"2BhxUqv84l510kT5Gi5ccxngIL.cRWk4","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2BhxUqv84l510kT5Gi5ccxngIL.cRWk4/category_gameplay/flat_medal1.png"},"ad88a6ba-40d8-4f80-89b6-4b1558d4f8f3":{"name":"sun_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":45,"version":"9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var line1 = createSprite(200, 120,400,5);
line1.shapeColor = ("red");

var line2 = createSprite(200, 280,400,5);
line2.shapeColor = ("red");

var player = createSprite(30, 350,5,5);
player.shapeColor = ("red");
player.setAnimation("alienGreen_badge_1");

var laser1 = createSprite(130, 290,10,10);
laser1.shapeColor = ("red");
 
var laser2 = createSprite(275, 290,10,10);
laser2.shapeColor = ("red");
var laser3 = createSprite(130, 130,10,10);
laser3.shapeColor = ("red");
var laser4 = createSprite(275, 130,10,10);
laser4.shapeColor = ("red");
var laser5 = createSprite(130, 10,10,10);
laser5.shapeColor = ("red");
var laser6 = createSprite(275, 10,10,10);
laser6.shapeColor = ("red");


var checkpoint1 =createSprite(395,340,10,110);
checkpoint1.shapeColor = ("yellow");

var checkpoint2 =createSprite(395,200,10,145);
checkpoint2.shapeColor = ("yellow");

var medal = createSprite(380,50,10,10);
medal.shapeColor = ("yellow");
medal.setAnimation("flat_medal1_1");

var count = 0;

var gameState = "serve";

//playSound("assets/category_loops/vibrant_game_musical_the_end_approaching_loop_1.mp3",true);

function draw() {
background("lightblue");
textSize(20);
text("Deaths: " + count,165,30);
createEdgeSprites();
player.bounceOff(edges);
player.velocityX = 0;
player.velocityY = 0;


if (gameState === "serve") {
    text("Press Space to Play",150,180);
  }
if (keyDown("RIGHT")){
  player.x = player.x+10;
}

if (keyDown("LEFT")){
  player.x = player.x-10;
}

if (keyDown("up")){
  player.y = player.y-10;
}

if (keyDown("down")){
  player.y = player.y+10;

}


player.bounceOff(line1);
player.bounceOff(line2);
laser1.bounceOff(line2);
laser2.bounceOff(line2);
laser1.bounceOff(edges);
laser2.bounceOff(edges);
laser3.bounceOff(line1);
laser3.bounceOff(line2);
laser4.bounceOff(line1);
laser4.bounceOff(line2);
laser5.bounceOff(line1);
laser5.bounceOff(edges);
laser6.bounceOff(line1);
laser6.bounceOff(edges);

if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
}


if ((player.isTouching(laser1)||(player.isTouching(laser2))||(player.isTouching(laser3))||(player.isTouching(laser4))||(player.isTouching(laser5))||(player.isTouching(laser6)))){
laser1.velocityX = 0;
laser1.velocityY = 0;
laser2.velocityX = 0;
laser2.velocityY = 0;
laser3.velocityX = 0;
laser3.velocityY = 0;
laser4.velocityX = 0;
laser4.velocityY = 0;
laser5.velocityX = 0;
laser5.velocityY = 0;
laser6.velocityX = 0;
laser6.velocityY = 0;
player.velocityX = 0;
player.velocityY = 0;
textSize(20);
text("You were Caught",200,200);
player.velocityX = 0;
player.velocityY = 0;
player.x = 30;
player.y = 370;
playSound("assets/category_alerts/cartoon_negative_bling.mp3");
 count = count + 1;
 reset();
gameState = "serve";
 
}

if (player.isTouching(checkpoint1)){
player.x = 30;
player.y = 200;
playSound("assets/category_collect/energy_bar_recharge_6.mp3");
}
if (player.isTouching(checkpoint2)){
player.x = 30;
player.y = 60;
playSound("assets/category_collect/energy_bar_recharge_6.mp3");
}
if (player.isTouching(medal)){
textSize(20);
  text("You Won",200,200);
player.velocityX = 0;
player.velocityY = 0;
laser1.velocityX = 0;
laser1.velocityY = 0;
laser2.velocityX = 0;
laser2.velocityY = 0;
laser3.velocityX = 0;
laser3.velocityY = 0;
laser4.velocityX = 0;
laser4.velocityY = 0;
laser5.velocityX = 0;
laser5.velocityY = 0;
laser6.velocityX = 0;
laser6.velocityY = 0;
player.velocityX = 0;
player.velocityY = 0;

}


drawSprites();

}

function serve() {
laser1.x = 130;
laser1.y = 290;
laser2.x = 275;
laser2.y = 290;
laser3.x = 130;
laser3.y = 130;
laser4.x = 275;
laser4.y = 130;
laser5.x = 130;
laser5.y = 10;
laser6.x = 275;
laser6.y = 10;
player.velocityX = 0;
player.velocityY = 0;
laser1.velocityY = 10;
laser1.velocityX = 0;
laser2.velocityY = 10;
laser2.velocityX = 0;
laser3.velocityY = 15;
laser3.velocityX = 0;
laser4.velocityY = 15;
laser4.velocityX = 0;
laser5.velocityY = 12;
laser5.velocityX = 0;
laser6.velocityY = 12;
laser6.velocityX = 0;
}

function reset() {
  player.x = 30;
  player.y = 350;
  player.velocityX = 0;
  player.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
