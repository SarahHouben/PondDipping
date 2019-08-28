const game = new Game();




function setup() {
    let canvas = createCanvas(windowWidth / 2.2, windowHeight);
    canvas.parent("canvas");
    background("black");

    game.setup();
    // game.createMargin();

    //Sound Effect for popping bubble
    soundFormats('mp3');
    bubbleSound = loadSound('./sound_assets/bubble_pop.mp3');

}


function draw() {
    game.draw();
}

function mousePressed() {
    game.bubbleClick();
}

function windowResized() {
    resizeCanvas(windowWidth / 2.2, windowHeight);
}