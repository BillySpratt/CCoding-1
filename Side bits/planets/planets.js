class Planet{
    constructor(){
        this.posX = random(0,1000);
        this.posY = random(0,1000);
        this.radius = random(10,50);
        this.colourR = random(70,255);
        this.colourG = random(70,255);
        this.colourB = random(70,255);
        this.sposX = random(0,1000);
        this.sposY = random(0,1000);
        this.speed = random(0.5,3);
    }
    stars(){
        fill(255,255,255);
        ellipse(this.sposX,this.sposY,4);
    }
    render(){
        fill(this.colourR,this.colourG,this.colourB);
        noStroke();
        ellipse(this.posX,this.posY,this.radius);
    }
    orbit(){
        this.posX = this.posX + this.speed;
    }
}

let planets=[]

function setup(){
    createCanvas(1000,700)

    for(let i=0; i<40; i++){
        planets.push(new Planet())
    }
}

function draw(){
    background(0,0,0);
    planets.forEach(planet => planet.stars());
    planets.forEach(planet => planet.render());
    planets.forEach(planet => planet.orbit());
}