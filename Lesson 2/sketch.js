let molecules = []



function setup() {
    createCanvas(1500, 800);
    background(130);
    for (let i = 0; i < 1500; i++) {
        molecules.push(new Molecule())
    }

    for (let i = 0; i < molecules.length; i++) {
        console.log(molecules.posX);
    }
}

function draw() {
    for (let i = 0; i < molecules.length; i++) {
        Molecule[i].render();
        Molecule[i].step();
    }
}