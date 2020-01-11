function setup() {
    createCanvas(400, 400);
    // setup() runs once
    frameRate(30);
}

let yPos = 0;
let xDelta = 0;

function draw() {
    noStroke();
    colorMode(RGB);
    stroke('blue');
    strokeWeight(1);
    background('black');
    yPos = yPos - 10;
    xDelta = xDelta + 100;
    if (yPos < 0) {
        yPos = height;
    }
    line(0 + xDelta, yPos, width - xDelta * 2, yPos);
}