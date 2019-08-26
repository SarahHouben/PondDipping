class Game {

    constructor() {
        this.background = new Background();
        this.bubble = [];
    };

    setup() {
        this.background.setup();
        // this.bubble.setup();
        this.bubble.push(new Bubble("I am an answer", true));
    };

    draw() {
        this.background.draw();
        console.log(this.bubble);

        this.bubble.map((bub) => bub.display())
    }


}