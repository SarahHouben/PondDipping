class Game {

    constructor() {
        this.background = new Background();
        this.group = 0;
    };

    setup() {

        this.background.setup();


        //Questions-Array
        this.questionArray = ["Zooplankton is the name for small aquatic…?",
            "What animal species can’t be found in the waters of Attenborough Nature Reserve?",
            "The presence of Gammarids is an indicator for good water…?",
            "How large are Water Fleas?",
            "Water Slaters are closely related to…?",
            "Why are crustaceans of the family Cyclopidae named after the mythical creature cyclops? Because of their…?",
            "Which country does the invasive Bloody Red Shrimp stem from?",
            "The tiny crustacean Polyphemus pediculus is a…?",
            "Water Fleas help maintain their habitats as they…?"
        ];

        //Image-Array
        this.imageArray = ["./question_assets/Q1.png",
            "question_assets/Q2.png",
            "question_assets/Q3.png",
            "question_assets/Q4.png",
            "question_assets/Q5.png",
            "question_assets/Q6.png",
            "question_assets/Q7.png",
            "question_assets/Q8.png",
            "question_assets/Q9.png"
        ];



        //x-corrdinates for the positioning of the bubbles
        let x1 = random(110, (width / 3) - 100);
        let x2 = random((width / 3) + 100, (width / 3) * 2 - 100);
        let x3 = random((width / 3) * 2 + 100, width - 110);


        //Level 1
        let bubble1A = new Bubble('Zoos', false, x1, 1);
        let bubble1B = new Bubble('Plants', false, x2, 1);
        let bubble1C = new Bubble('Animals', true, x3, 1);

        let bubble2A = new Bubble('Fish', false, x1, 1);
        let bubble2B = new Bubble('Crustaceans', false, x2, 1);
        let bubble2C = new Bubble('Crocodiles', true, x3, 1);

        let bubble3A = new Bubble('Fluidity', false, x1, 1);
        let bubble3B = new Bubble('Quality', true, x2, 1);
        let bubble3C = new Bubble('Saltiness', false, x3, 1);

        //Level 2
        let bubble4A = new Bubble('1 – 5 cm', false, x1, 2);
        let bubble4B = new Bubble('0.2 – 6 mm', true, x2, 2);
        let bubble4C = new Bubble('10 cm', false, x3, 2);

        let bubble5A = new Bubble('Spiders', false, x1, 2);
        let bubble5B = new Bubble('Dragonflies', false, x2, 2);
        let bubble5C = new Bubble('Woodlice', true, x3, 2);

        let bubble6A = new Bubble('Strength', false, x1, 2);
        let bubble6B = new Bubble('Single eye', true, x2, 2);
        let bubble6C = new Bubble('Colour', false, x3, 2);

        //Level 3
        let bubble7A = new Bubble('Spain', false, x1, 3);
        let bubble7B = new Bubble('Canada', false, x2, 3);
        let bubble7C = new Bubble('Russia', true, x3, 3);

        let bubble8A = new Bubble('Predator', true, x1, 3);
        let bubble8B = new Bubble('Herbivore', false, x2, 3);
        let bubble8C = new Bubble('Omnivore', false, x3, 3);

        let bubble9A = new Bubble('Are tidy', false, x1, 3);
        let bubble9B = new Bubble('Filter water', true, x2, 3);
        let bubble9C = new Bubble('Eat fish', false, x3, 3);


        this.bubblesArray = [
            [bubble1A, bubble1B, bubble1C],
            [bubble2A, bubble2B, bubble2C],
            [bubble3A, bubble3B, bubble3C],
            [bubble4A, bubble4B, bubble4C],
            [bubble5A, bubble5B, bubble5C],
            [bubble6A, bubble6B, bubble6C],
            [bubble7A, bubble7B, bubble7C],
            [bubble8A, bubble8B, bubble8C],
            [bubble9A, bubble9B, bubble9C],
        ];

        this.bubbles = [...this.bubblesArray];


        //Calculate possible points (each correct answer is worth one point)
        possiblePoints = this.bubblesArray.length;

    };



    gameOver() {

        //Show game over display
        document.getElementById("question-image").src = `style_assets/game_over_daphnia.gif`;
        document.querySelector(".question h2").innerText = "Game Over";

        //Display message "scored points out of possible points"
        if (totalScore <= 0) {
            document.querySelector(".question-text").innerText = `${totalScore} from ${possiblePoints} points. You still have a lot of exploring to do!`;
        } else if (totalScore === 1) {
            document.querySelector(".question-text").innerText = `Nice try! You scored ${totalScore} of ${possiblePoints} points. You still have a lot of exploring to do!`;
        } else if (totalScore < (possiblePoints / 3)) {
            document.querySelector(".question-text").innerText = `Nice try! You scored ${totalScore} out of ${possiblePoints} points. Time to explore the underwater-world further!`;
        } else if (totalScore < (possiblePoints / 2)) {
            document.querySelector(".question-text").innerText = `Well done! You've obviously been PondDipping before! You scored ${totalScore} out of ${possiblePoints} points.`;
        } else if (totalScore < possiblePoints) {
            document.querySelector(".question-text").innerText = `Great Job! You really know Attenborough's underwater-world! You scored ${totalScore} out of ${possiblePoints} points.`;
        } else if (totalScore === possiblePoints) {
            document.querySelector(".question-text").innerText = `Tremendous - You're a true PondDipping-Pro! You scored all ${possiblePoints} points!`;
        } else {
            document.querySelector(".question-text").innerText = `You scored ${totalScore} out of ${possiblePoints} points.`;
        }


        backgroundSound.stop();

        noLoop();

    };



    draw() {

        clear();

        this.background.draw();

        //Display correct Image
        document.getElementById("question-image").src = `${this.imageArray[this.group]}`;
        //Display correct Question
        document.querySelector(".question-text").innerText = `${this.questionArray[this.group]}`;

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
                groupBubbles[j].display();
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