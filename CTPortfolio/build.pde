/* @pjs preload="smoky.jpg","smokeyTheBear.jpg"; */
//*********************************************
//Program name: Design Challenge 6
//Author: Gabriella Johnson
//Date created
//Purpose
//Revision History:
//20191007
//*********************************************
float theta;
int i = 0;
int j = 0;
int rainY = 0;
int steamY = 600;
int steamX = 0;
int increment = 0;
int appleX = 25;
int appleY = 390;
int appleStemX = 50;
int appleStemY = 380;
boolean move = false;
boolean showText = false;
boolean rain = false;
boolean blackOut = false;
boolean steam = false;
PImage img, smoke;

void settings() {
  size(600, 600);
  
}

void setup() {
  img = loadImage("smokeyTheBear.jpg");
  smoke = loadImage("smoky.jpg");
}

void draw(){
  background(0);
  frameRate(30);

  if(!blackOut) {
    background(255);
    frameRate(30);
    if(appleY > height) {
      background(100);
    }
    
    drawGrass();
    drawIsaacNewton();
    stroke(0);
    pushMatrix();
    // Let's pick an angle 0 to 90 degrees based on the mouse position
    float a = 18;
    // Convert it to radians
    theta = radians(a);
    // Start the tree from the bottom of the screen
    translate(width/3,height);
    stroke(156, 91, 2);
    strokeWeight(8);
    // Draw a line 120 pixels
    line(0,0,0,-60);
    // Move to the end of that line
    translate(0,-60);
    // Start the recursive branching!
    branch(90);
    popMatrix();
    // put the apples in the tree
    pushMatrix();
    if(move) {
      appleY +=  10;
      appleStemY +=  10;
    }
    for(i = 0; i < 5; i++) {
      drawApple(appleX, appleY, appleStemX, appleStemY);
    }
    popMatrix();
    if(showText) {
      fill(0);
      textSize(48);
      text("Gravity!", 275, 550);
      makeLightning((int) random(width), 0, 12);
    }
    
    if(appleY > height) {
      showText = false;
      drawFire(150, height / 3, color(255, 3, 3), 0.03);
      drawFire(100, height / 2, color(255, 141, 3), 0.01);
      makeItRain();
    }
    if(rain) {
      rainY += 30;
      if(rainY > height)
        rainY = 0;
    }
  } else {
    background(100);
    image(smoke, 0, 0, width, height);
    image(img, 350, 50);
    stroke(0);
    pushMatrix();
    // Let's pick an angle 0 to 90 degrees based on the mouse position
    float a = 18;
    // Convert it to radians
    theta = radians(a);
    // Start the tree from the bottom of the screen
    translate(width/3,height);
    strokeWeight(8);
    // Draw a line 120 pixels
    line(0,0,0,-60);
    // Move to the end of that line
    translate(0,-60);
    // Start the recursive branching!
    branch(90);
    popMatrix();
  }
  
}

void makeItRain() {
  for(j = 0; j < 20; j++) {
   for(i = 0; i < 30; i++) {
     fill (0, 213, 255);
     ellipse(0 + (i * 30), (rainY - 15) + (j * -30), 5, 15);
   }
  }
}

void makeLightning(int xloc, int yloc, float weight) {
  int nextX = (int) random(xloc - width/10, xloc + width / 10);
  int nextY = (int) random(yloc, yloc + height / 10);
  stroke(255, 251, 0);
  strokeWeight(weight);
  line(xloc, yloc, nextX, nextY);
  weight -= random(1);
  if(weight > 0 && nextY < height) {
    makeLightning(nextX, nextY, weight);
    if(1 > random(10)) {
      makeLightning(nextX, nextY, weight);
    }
  }
}

void drawFire(int noiseScale, int offsetFromTop, color theColor, float noiseStep){
  noiseSeed(int(random(10000)));
  noStroke();
  fill(theColor);
  beginShape();
  for(int i = 0; i < width; i++) {
    vertex(i, noise(i* noiseStep) * noiseScale + offsetFromTop);
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
}


void drawGrass() {
  noStroke();
  fill(42, 128, 44);
  square(0, 585, width);
}

void drawIsaacNewton(){
  pushMatrix();
  strokeWeight(1);
  noFill();
  stroke(0);
  translate(-25, 10);
  circle(250, 525, 30);
  line(250, 540, 250, 580);
  line(250, 560, 265, 555);
  line(250, 580, 275, 590);
  square(265, 545, 20);
  popMatrix();
  if (appleY == 550){
    showText = true;
  }
      
}

void drawApple(int appleX, int appleY, int appleStemX, int appleStemY){
  noFill();
  stroke(0);
  strokeWeight(1);
  translate(55, 0);
  arc(appleStemX, appleStemY + increment, 40, 40, PI, PI+QUARTER_PI);
  noStroke();
  fill(255, 0, 0);
  ellipse(appleX, appleY + increment, 18, 30);
  ellipse((appleX + 10), appleY + increment, 18, 30);
}

void branch(float h) {
  if (!blackOut){
     // Each branch will be 2/3rds the size of the previous one
    h *= 0.75;
    stroke(156, 91, 2);
    strokeWeight(8);
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h > 2) {
      if(h < 16)
        stroke(2, 156, 5);
      pushMatrix();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta);   // Rotate by theta
      line(0, 0, 0, -h);  // Draw the branch
      translate(0, -h); // Move to the end of the branch
      branch(h);       // Ok, now call myself to draw two new branches!!
      popMatrix();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
      
      // Repeat the same thing, only branch off to the "left" this time!
      pushMatrix();
      if(h < 16)
        stroke(2, 156, 5);
      rotate(-theta);
      line(0, 0, 0, -h);
      translate(0, -h);
      branch(h);
      popMatrix();
    
    }
  }else {
     // Each branch will be 2/3rds the size of the previous one
    h *= 0.75;
    strokeWeight(8);
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h > 2) {
      pushMatrix();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta);   // Rotate by theta
      line(0, 0, 0, -h);  // Draw the branch
      translate(0, -h); // Move to the end of the branch
      branch(h);       // Ok, now call myself to draw two new branches!!
      popMatrix();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
      
      // Repeat the same thing, only branch off to the "left" this time!
      pushMatrix();
      rotate(-theta);
      line(0, 0, 0, -h);
      translate(0, -h);
      branch(h);
      popMatrix();
    }
  }
}

void mouseClicked() {
  move = true;
  steam = true;
  
}

void keyPressed() {
  if(rain) {
    rainY = 0;
    rain = false;
    blackOut = true;
  }
   else
     rain = true; 
}
