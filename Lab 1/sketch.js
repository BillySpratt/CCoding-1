let myArrow;
let myArrow2;
let myArrow3;

function setup(){
    createCanvas(1500,800);
    background(130); 
    myArrow = new Arrow(width/2,height/2,0);
    myArrow2 = new Arrow(width/2 +200,height/2,0);
    myArrow3 = new Arrow(width/2 -200,height/2,0);
    console.log(myArrow);  
}

function draw(){
    background(130);
    myArrow.update();
    myArrow.drawArrow();
    myArrow2.update();
    myArrow2.drawArrow();
    myArrow3.update();
    myArrow3.drawArrow();
}