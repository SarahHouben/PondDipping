const game = new Game();


function setup() {
    let canvas = createCanvas(windowWidth / 2.5, windowHeight);
    canvas.parent("canvas");
    background("black");
    game.setup();
}


function draw() {
    game.draw();
}


function windowResized() {
    resizeCanvas(windowWidth / 3, windowHeight);
}