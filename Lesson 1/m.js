class Molecule{
    constructor(){
        this.posX = Math.round(Math.random()*1500);
        this.posY = Math.round(Math.random()*800);
        this.radius = Math.round(Math.random()*20+5);
        this.speedX = Math.round(Math.random()*3+0.5);
        this.speedY = Math.round(Math.random()*3+0.5);
    }
}
