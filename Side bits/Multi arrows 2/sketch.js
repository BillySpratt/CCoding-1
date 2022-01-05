let myArrows = []

function setup() {
    createCanvas(1500, 800);
    background(130);
    for (let arno = 0; arno < 10; arno++) {
        myArrows.push(new Arrow())
        console.log("Arrow " + (arno + 1) + " Distance to Center :");
        myArrows.forEach(arrow => arrow.distToCenter());
    }
}

function draw() {
    background(255);
    myArrows.forEach(arrow => arrow.drawArrow());
}