// https://editor.p5js.org/

let y = 300;
let x = 300;
let a = 1.0;
let mc = 0;

let ballR = 20;
let ballXA = 0;
let ballYA = 0;
let ballX = x + 50;
let ballY = y - ballR;

function setup() {
    createCanvas(720, 400, WEBGL);
    frameRate(60);
}

function draw() {
    background('rgb(10,10,50)');
    stroke(255, 255, 255);

    if (keyIsDown(LEFT_ARROW)) {
        x -= a;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        x += a;
    }

    if (mc !== 0) {
        if (ballYA === 0) {
            ballYA = -5;
        }
        ballXA = Math.random(2) - Math.random(4);
    }

    console.log(ballY);
    console.log(ballYA);
    console.log(y);

    ballX += ballXA;
    ballY += ballYA;

    if (ballY - ballR < 0 || ballY + ballR > y) {
        ballYA = -ballYA;
    }

    circle(ballX, ballY, ballR);
    line(x, y, x + 100, y);
}

function mouseClicked() {
    if (mc === 0) {
        mc = 255;
    } else {
        mc = 0;
    }
}