let snacks = [];
let crumbs = [];
//My gui paramaters
let params = {
    dSize: 300,
    dSizeMin: 10,
    dSizeMax: 400,

    DoughnutRemaining: 200,
    DoughnutRemainingMin: 50,
    DoughnutRemainingMax: 600,

    CrumbSize: 10,
    CrumbSizeMin: 2,
    CrumbSizeMax: 30,

    Crumbiness: 2,
    CrumbinessMin: 1,
    CrumbinessMax: 5,

    icingColour: [255, 105, 180],
    bunColour: [248, 164, 85],
    bgColour: [105, 255, 245],

}
let visible = true;
var gui;


function setup() {
    createCanvas(1520, 845);
    //my gui menu name, and position
    gui = createGui('Doughnut Settings');
    gui.addObject(params);
    gui.setPosition(1250, 25);

    //spawns the doughnut
    for (let b = 0; b < 1; b++) {
        snacks.push(new Snack(width / 2, height / 2, params.dSize, params.DoughnutRemaining));
    }

}

function draw() {
    background(params.bgColour);
    //makes gravity
    let gravity = createVector(0, 0.2);

    //loads all the functions for the doughnut
    snacks.forEach(snack => snack.drawSnack(params.dSize, params.icingColour, params.bgColour, params.DoughnutRemaining, params.bunColour));
    snacks.forEach(snack => snack.moveSnack(params.dSize));
    snacks.forEach(snack => snack.hungryHead());
    snacks.forEach(snack => snack.eat(params.dSize));
    snacks.forEach(snack => snack.eaten());
    //activates the emitter when the mouse is on the doughnut
    if (snacks[0].eat(params.dSize) == true) {
        for (let i = 0; i < params.Crumbiness; i++) {
            crumbs.push(new Crumb(mouseX, mouseY))
        }
    }
    //splices the crumbs once the lifetime = 0
    for (let i = crumbs.length - 1; i >= 0; i--) {
        if (crumbs[i].isFinished()) {
            crumbs.splice(i, 1);
        }
    }
    /*the if statement prevents the emitter from working once the doughnut is gone, 
    everything else is just drawing and moving the crumbs*/
    if (snacks[0].eaten() == false) {
        crumbs.forEach(crumb => {
            crumb.applyForce(gravity);
            crumb.update();
            crumb.render(params.bunColour, params.icingColour, params.CrumbSize);
        });
    }
}
//allows you to hide the gui menu by pressing "p"
function keyPressed() {
    switch (key) {
        case 'p':
            visible = !visible;
            if (visible) gui.show();
            else gui.hide();
            break;
    }
}