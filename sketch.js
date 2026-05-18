let gameState="TITLE";
let quizMode=1;
let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let quizIndex=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function drawQuestion(index) {
  fill('black');
  textSize(windowWidth * 0.2);
  if(quizMode==0){
    text(alphabet[index],windowWidth/2,windowHeight*0.25);
  }
  else if(quizMode==1){
    text(index+1,windowWidth/2,windowHeight*0.25);
  }
}
function drawAnswer(index) {
  fill('black');
  textSize(windowWidth * 0.2);
  if(quizMode==0){
    text(alphabet[index],windowWidth/2,windowHeight*0.25);
    text(index+1,windowWidth/2,windowHeight*0.75);
  }
  else if(quizMode==1){
    text(index+1,windowWidth/2,windowHeight*0.25);
    text(alphabet[index],windowWidth/2,windowHeight*0.75);
  }
}
function drawTitle(){
  fill('#afff94');
  rect(windowWidth*0.1,windowHeight*0.1,windowWidth*0.8,windowHeight*0.3);
  fill('#aec3ff');
  rect(windowWidth*0.1,windowHeight*0.6,windowWidth*0.8,windowHeight*0.3);
  fill('black');
  textSize(windowWidth * 0.07);
  drawingContext.letterSpacing = (windowWidth * 0.02) + "px"; 
  text("ABC → 123",windowWidth/2,windowHeight*0.25);
  text("123 → ABC",windowWidth/2,windowHeight*0.75);
}
function handleInput(x, y){
  if(gameState==="TITLE"){
    if(x>windowWidth*0.1 && x<windowWidth*0.9 && y>windowHeight*0.1 && y<windowHeight*0.4){
      quizMode=0;
      gameState="ANSWER";
    }else if(x>windowWidth*0.1 && x<windowWidth*0.9 && y>windowHeight*0.6 && y<windowHeight*0.9){
      quizMode=1;
      gameState="ANSWER";
    }
  }
  if(gameState==="ANSWER"){
    quizIndex=Math.floor(Math.random()*26);
    gameState="QUESTION";
  }else if(gameState==="QUESTION"){
    gameState="ANSWER";
  }
}
function mousePressed(){
  handleInput(mouseX, mouseY);
  return false;
}
function touchStarted(){
  handleInput(touches[0].x, touches[0].y);
  return false;
}
function draw() {
  background(220);
  textAlign(CENTER,CENTER);
  if(gameState==="TITLE"){
    drawTitle();
  }else if(gameState==="QUESTION"){
    drawQuestion(quizIndex);
  }else if(gameState==="ANSWER"){
    drawAnswer(quizIndex);
  }
}
