let screenWidth = 500;
let screenHeight = 500;

//alien variables
let aliens = [];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = .5;
let numCols = 12;
let numRows = 7;
let hspace = 30;
let vspace = 30;
let xoffset = (screenWidth - (numCols - 1) * hspace) / 2;
let yoffset = 20;
let shiftDown = 50;
let alienImg;

//shooter variables
let shooterWidth = 100;
let shooterHeight = 20;
let shooter;

//bullet variables
let bullets = [];
let bulletWidth = 10;
let bulletVelocity = 5;

function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateAliens()
    shooter = new Shooter(screenWidth / 2, screenHeight - (shooterHeight / 2));
    createCanvas(screenWidth, screenHeight);
    background(255);
}

function draw() {
    background(0);

    //creates the shooter
    shooter.render();
    shooter.move();

    let shift = false;

    //creates and moves the aliens side to side
    aliens.forEach(alien => {
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth ? shift = true : null;
        alien.pos.x <= 0 ? shift = true : null;
    });

    //makes the aliens move down
    if (shift) {
        aliens.forEach(alien => {
            alien.shift();
        })
    }
    //moves and draws bullets. Deletes the bullets and aliens
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();
        bullets[i].render();
        for (let j = aliens.length - 1; j >= 0; j--) {
            if (bullets[i].hits(aliens[j])) {
                aliens.splice(j, 1);
                bullets.splice(i, 1);
                break;
            }
        }
    }
}

//Creates the movement and shooting mechanics
function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        shooter.setDirection(1);
    } else if (keyCode === LEFT_ARROW) {
        shooter.setDirection(-1);
    } else if (keyCode === 32) {
        bullets.push(new Bullet(shooter.pos.x, shooter.pos.y - 10))
    }
}

//creates the alien formation
function populateAliens() {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            aliens.push(new Alien(col * hspace + xoffset, row * vspace + yoffset))
        }
    }
}