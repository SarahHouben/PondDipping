const game = new Game();

function preload() {

    //Sound Effect for popping bubble
    soundFormats('mp3');
    bubbleSound = loadSound('./sound_assets/bubble_pop.mp3');
    backgroundSound = loadSound('./sound_assets/Wasser sprudelt.mp3')

}

function setup() {
    let canvas = createCanvas(windowWidth / 2.2, windowHeight);
    canvas.parent("canvas");
    background("black");

    game.setup();

    // game.createMargin();

    backgroundSound.setVolume(0.2);
    backgroundSound.loop();

}

//ON BUTTON CLICK INITIATE FUNCTION DRAW AND SHOW GAME HTML
function draw() {
    game.draw();
}

function mousePressed() {
    game.bubbleClick();
}

function windowResized() {
    resizeCanvas(windowWidth / 2.2, windowHeight);
}