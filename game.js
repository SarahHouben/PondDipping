class Game {

    constructor() {
        this.background = new Background();
        this.group = 0;
    };

    setup() {
        this.background.setup();



        let bubble1A = new Bubble('answer', false, 0);
        let bubble1B = new Bubble('answerB', false, 1);
        let bubble1C = new Bubble('answerB', true, 2);

        let bubble2A = new Bubble('answer', false, 0);
        let bubble2B = new Bubble('answerB', false, 1);
        let bubble2C = new Bubble('answerB', true, 2);

        let bubble3A = new Bubble('answer', false, 0);
        let bubble3B = new Bubble('answerB', false, 1);
        let bubble3C = new Bubble('answerB', true, 2);

        let bubble4A = new Bubble('answer', false, 0);
        let bubble4B = new Bubble('answerB', false, 1);
        let bubble4C = new Bubble('answerB', true, 2);

        let bubble5A = new Bubble('answer', false, 0);
        let bubble5B = new Bubble('answerB', false, 2);
        let bubble5C = new Bubble('answerB', true, 2);

        let bubble6A = new Bubble('answer', false, 0);
        let bubble6B = new Bubble('answerB', false, 1);
        let bubble6C = new Bubble('answerB', true, 2);


        let bubblesArray = [
            [bubble1A, bubble1B, bubble1C],
            [bubble2A, bubble2B, bubble2C],
            [bubble3A, bubble3B, bubble3C],
            [bubble4A, bubble4B, bubble4C],
            [bubble5A, bubble5B, bubble5C],
            [bubble6A, bubble6B, bubble6C],
        ];

        this.bubbles = [...bubblesArray];
    };


    draw() {
        clear();

        this.background.draw();

        //Show the three bubbles for the first question
        let groupBubbles = this.bubbles[this.group];
        // when level is 0, it becomes this.bubbles[0]
        for (let j = 0; j < groupBubbles.length; j++) {
            groupBubbles[j].move();
            groupBubbles[j].display();
        }

    }

    bubbleClick() {

        for (let i = 0; i < this.bubbles[this.group].length; i++) {
            this.bubbles[this.group][i].clicked(i);

        }


    }




    checkAnswerLevelUp() {
        //check if answer is correct
        //if correct, give one point, llevel up
        //if false, give minus point, delete bubble (with splice)
    }

}

//check answer of bubble (true or false)

// function falseAnswer ->level down
//function correctAnswer -> level up