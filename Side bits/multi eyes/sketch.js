let someEyes=[]

function setup(){
    createCanvas(1500,800);
    background(130); 
    for(let eyes=0; eyes<100; eyes++){
        someEyes.push(new Eye())
    }
    console.log(someEyes);  
}

function draw(){
    background(100,200,255);
    someEyes.forEach(eye => eye.update());
    someEyes.forEach(eye => eye.stare());
}