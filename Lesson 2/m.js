class Molecule {
    constructor() {
        this.posX = Math.round(Math.random() * 1500);
        this.posY = Math.round(Math.random() * 800);
        this.radius = Math.round(Math.random() * 20 + 5);
        this.speedX = (Math.random() * 4) - 2;
        this.speedY = (Math.random() * 4) - 2;
    }
    render() {
        ellipse(this.posX, this.posY, this.radius);
    }
    step() {
        this.posX += this.speedX;
        this.posY += this.speedY;
    }
}