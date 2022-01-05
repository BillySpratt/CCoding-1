class Molecule{
    constructor(){
        //this.posX = random(100,1500);
        //this.posY = random(100,700);
        this.posX = 750;
        this.posY = 350;
        this.radius = random(1,50);
        this.colourR = random(1,255);
        this.colourG = random(1,255);
        this.colourB = random(1,255);
        this.speedX = random(-12,12);
        this.speedY = random(-12,12);
        this.size = random(-1,0);
    }
    render(){
        fill(this.colourR,this.colourG,this.colourB);
        noStroke();
        ellipse(this.posX,this.posY,this.radius);
    }
    move(){
        this.posX = this.posX + this.speedX;
        this.posY = this.posY + this.speedY;
        this.colourR = this.colourR - this.speedX;
        this.colourG = this.colourG - this.speedY;
        this.colourB = this.colourB + ((this.speedX+this.speedY)/2);
        //this.radius = this.radius + this.size;
    }
}

let molecules=[]

function setup(){
    createCanvas(1500,800)
    fullscreen();
    for(let i=0; i<1500; i++){
        molecules.push(new Molecule())
    }
}

function draw(){
    molecules.forEach(molecule => molecule.render());
    molecules.forEach(molecule => molecule.move());
}