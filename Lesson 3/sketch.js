let molecules = []


for (let i = 0; i < molecules.length; i++) {
    console.log(molecules.posX);
}

function setup() {
    createCanvas(1500, 800);
    background(130);
    for (let i = 0; i < 1500; i++) {
        molecules.push(new Molecule())
    }

}

function draw() {
    molecules.forEach(molecule => molecule.render())
    molecules.forEach(molecule => molecule.step())
}