class Game {

    constructor() {
        this.background = new Background();
        this.bubbles = []; // var bubbles = [bubble1A, bubble1B, bubble1C, bubble2A, bubble2B, bubble2C]; ?
    };

    setup() {
        this.background.setup();

        //DRAW BUBBLES FOR ONE ROUND
        for (let i = 0; i < 3; i++) {
            this.bubbles.push(new Bubble("I am an answer", true, i));
        }
    };

    draw() {
        this.background.draw();
        // console.log(this.bubble);

        //Create new Bubble Array with the bubbles for one round
        this.bubbles.map((bub) => bub.move(bub.display()));
    }

    bubbleClick() {
        console.log("clickone");
        for (let i = 0; i < this.bubbles.length; i++) {
            console.log("testclick")
            this.bubbles[i].clicked();
        }
    }

}