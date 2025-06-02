let bodyDiv = document.querySelector(".body");
let firstCanvas = document.getElementById("canvas");
let ctx = firstCanvas.getContext("2d");
let gameRunning = true;

//for ball
let angle = Math.PI / 4; 
let speed = 5;

let velocityX = speed * Math.cos(angle);
let velocityY = speed * Math.sin(angle);


let ballX = 100;
let ballY = 75;


//for left paddle
let leftPaddleX = 20;
let leftPaddleY = 50;

firstCanvas.width = bodyDiv.clientWidth;
firstCanvas.height = bodyDiv.clientHeight;

//for right paddle
let rightPaddleX = canvas.width - 14;
let rightPaddleY = 50; 

let paddleWidth = 5;

let keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
})
document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
})
document.addEventListener("KeyW", (e) => {
    keys[e.code] = false;
})
document.addEventListener("KeyS", (e) => {
    keys[e.code] = false;
})
const draw = () => {
if (keys["KeyW"]) leftPaddleY -= 5;    
if (keys["KeyS"]) leftPaddleY += 5;    
if (keys["ArrowUp"]) rightPaddleY -= 5; 
if (keys["ArrowDown"]) rightPaddleY += 5; 

leftPaddleY = Math.max(0, Math.min(leftPaddleY, firstCanvas.height - 50));
rightPaddleY = Math.max(0, Math.min(rightPaddleY, firstCanvas.height - 50));

    ctx.clearRect(0, 0, firstCanvas.width, firstCanvas.height);
    ctx.fillStyle = "white";
ctx.fillRect(leftPaddleX, leftPaddleY, 5, 50);   

ctx.fillStyle = "white";
ctx.fillRect(rightPaddleX, rightPaddleY, 5, 50);

//ball
ctx.fillStyle = "white";
ctx.fillRect(ballX, ballY, 10, 10);  
ballX += velocityX;
ballY += velocityY;


//collision
if (
  ballX <= leftPaddleX + 5 && 
  ballX >= leftPaddleX &&     
  ballY + 10 >= leftPaddleY &&
  ballY <= leftPaddleY + 50
) {
  velocityX = -velocityX;
}


if (
  ballX + 10 >= rightPaddleX &&
  ballX <= rightPaddleX + 5 &&  
  ballY + 10 >= rightPaddleY &&
  ballY <= rightPaddleY + 50
) {
  velocityX = -velocityX;
}
//for not going outside for height
if (ballY <= 0 || ballY + 10 >= firstCanvas.height) {
    velocityY = -velocityY;
}

if (ballX<= 0 || ballX+ 10 >= firstCanvas.width) {
    gameRunning = false;
    alert("Game Over");
    document.getElementById("retryBtn").style.display = "inline-block";

}
if (gameRunning) requestAnimationFrame(draw);
document.getElementById("retryBtn").addEventListener("click", function () {
    location.reload(); 
});
}
draw();




