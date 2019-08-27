class Game {

    constructor() {
        this.background = new Background();
        this.group = 0;
        this.margin = [];
    };


    createMargin() {

        let space = (width / 3);
        // console.log(space);
        for (let i = 0; i < 3; i++) {
            for (let j = 2; j > 0; j--) {

                this.margin = [i * space, width - j * space]
                console.log(i * space);
                console.log(width - j * space);
                // console.log(this.margin);
                // console.log(i);
                // console.log(j);
            }
        }
        console.log(this.margin);
    };





    setup() {

        this.background.setup();


        let bubble1A = new Bubble('Giraffe', false, "margin");
        let bubble1B = new Bubble('Cow', false, "margin");
        let bubble1C = new Bubble('Bird', true, "margin");

        let bubble2A = new Bubble('Ant', false, "margin");
        let bubble2B = new Bubble('Bug', false, "margin");
        let bubble2C = new Bubble('Sugar', true, "margin");

        let bubble3A = new Bubble('answer', false, "margin");
        let bubble3B = new Bubble('answerB', false, "margin");
        let bubble3C = new Bubble('answerB', true, "margin");

        let bubble4A = new Bubble('answer', false, "margin");
        let bubble4B = new Bubble('answerB', false, "margin");
        let bubble4C = new Bubble('answerB', true, "margin");

        let bubble5A = new Bubble('answer', false, "margin");
        let bubble5B = new Bubble('answerB', false, "margin");
        let bubble5C = new Bubble('answerB', true, "margin");

        let bubble6A = new Bubble('answer', false, "margin");
        let bubble6B = new Bubble('answerB', false, "margin");
        let bubble6C = new Bubble('answerB', true, "margin");


        this.bubblesArray = [
            [bubble1A, bubble1B, bubble1C],
            [bubble2A, bubble2B, bubble2C],
            [bubble3A, bubble3B, bubble3C],
            [bubble4A, bubble4B, bubble4C],
            [bubble5A, bubble5B, bubble5C],
            [bubble6A, bubble6B, bubble6C],
        ];

        this.bubbles = [...this.bubblesArray];

    };



    gameOver() {

        console.log("GameOver")
        //PRINT FINAL SCORE (OUT OF POSSIBLE SCORE)
        //if score < 5 => you can do better next time
        // if score > 5 nice one! 
        // if full score = Genius
        //etc etc

        document.getElementById("question-image").src = `./question_assets/GameOver.jpg`;
        document.querySelector(".question-text").innerText = "";
        document.querySelector(".question h2").innerText = "Game Over";

        noLoop();

    };



    draw() {

        clear();

        this.background.draw();

        //Set correct Image
        document.getElementById("question-image").src = `${imageArray[game.group]}`;
        //Set correct Question
        document.querySelector(".question-text").innerText = `${questionArray[game.group]}`;

        //Check if there is another nested array left in bubblesArray
        if (this.group >= this.bubblesArray.length) {
            this.gameOver();

            //  Inititate new question round
        } else {
            //Show the three bubbles for the first question
            let groupBubbles = this.bubbles[this.group];
            // when level is 0, it becomes this.bubbles[0]
            for (let j = 0; j < groupBubbles.length; j++) {
                groupBubbles[j].move();
                // if (frameCount % 60 === 0) {
                groupBubbles[j].display();
                // }
            }
        }

    };



    bubbleClick() {
        //Checks whether there is a group left
        const group = this.bubbles[this.group]
        if (!group) return;

        //Initiates clicked function
        for (let i = 0; i < group.length; i++) {
            group[i].clicked(i);
        }

    };


}