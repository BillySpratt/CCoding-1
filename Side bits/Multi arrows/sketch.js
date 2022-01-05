let myArrows=[]

function setup(){
    createCanvas(1500,800);
    background(130); 
    for(let arno=0; arno<30; arno++){
        myArrows.push(new Arrow())
    }
    console.log(myArrows);  
}

function draw(){
    background(255);
    myArrows.forEach(arrow => arrow.update());
    myArrows.forEach(arrow => arrow.drawArrow());
}