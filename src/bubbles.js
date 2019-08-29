class Bubble {
    constructor(answer, correct, x, level) {
        this.x = x;
        this.y = random(height + 150, height + 350);
        this.diameter = random(170, 200);

        this.col = color(218, 246, 250, 70);

        this.level = level;
        this.answer = answer;
        this.correct = correct;
    }



    display() {

        //Draw bubbles
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);

        //Shows answer in the bubble
        text(this.answer, this.x, this.y);
        textSize(30);
        textAlign(CENTER);
        textFont();


        //Move Bubbles upwards 
        //Change speed according to Level
        switch (this.level) {
            case 1:
                this.y -= 1.2;
                break;
            case 2:
                this.y -= 1.5;
                break;
            case 3:
                this.y -= 1.8;
                break;
            default:
                this.y -= 1.9;
        }

        //Display correct Level 
        document.querySelector(".level h2").innerText = `Level ${this.level}`;



        //Collision check - end game if bubble reaches TOP of canvas
        if (this.y - (this.diameter / 2) <= 0) {

            //Sound Effect Bubble popping
            bubbleSound.play();

            //Pops 1 to 3 bubbles if they reach top of canvas
            game.bubbles[game.group].splice(0, 3);

            //Ends game
            game.gameOver();
        }

    };



    //Give Bubbles gittery-movement
    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    };



    clicked(bubbleIndex) {


        //Check which bubble was clicked
        //dist() calculates the distance between two points x1,y1 and x2,y2
        let mouseDistance = dist(mouseX, mouseY, this.x, this.y);
        if (mouseDistance < this.diameter / 2) {

            //CORRECT ANSWER
            if (game.bubbles[game.group][bubbleIndex].correct === true) {

                //Add 1 Pluspoint to Pluspoints-Score
                plusPoints += 1;

                //Show updated Pluspoints-Score in browser
                document.querySelector(".plus-points").innerText = `Points: ${plusPoints}`

                
                //Set variable for Overlay-functionality
                var previousLevel
                let group = game.bubbles[game.group]
                //Set Default value for current Level for when last level is reached.
                if (!group) previousLevel = 0;
                else previousLevel = game.bubbles[game.group][0].level;


                //Pop all bubbles (prevents game over by left-over bubbles touching canvas top)
                game.bubbles[game.group].splice(0, 3);

                //Sound Effect Bubble popping
                bubbleSound.play();

                //Initiate new question: Add 1 to   game.group counter to Start next Question group 
                game.group += 1;


                //Overlay - show Overlay when next level is reached. 
                var currentLevel
                let groupTwo = game.bubbles[game.group]
                //Set Default value for current Level for when last level is reached.
                if (!groupTwo) currentLevel = 0;
                else currentLevel = game.bubbles[game.group][0].level;

                if (previousLevel !== currentLevel) {
                    let overlay = document.querySelector(".overlay");
                    overlay.classList.add("overlay-show");
                    setTimeout(function () {
                        overlay.classList.remove("overlay-show");
                    }, 1000)
                }




                //WRONG ANSWER
                //This group continues until either correct bubble is popped or game is over as bubbles touch canvas top
            } else if (game.bubbles[game.group][bubbleIndex].correct === false) {
                //Add 1 Minuspoint to Minuspoints-Score
                minusPoints += 1;

                //Show updated Minuspoints in browser
                document.querySelector(".minus-points").innerText = `Minus-Points: ${minusPoints}`

                // Pop clicked bubble
                game.bubbles[game.group].splice(bubbleIndex, 1);

                //Sound Effect Bubble popping
                bubbleSound.play();
            }

            // Calculate total Score
            totalScore = plusPoints - minusPoints;

            // Show Total Score in browser
            document.querySelector(".total-score").innerText = `Score: ${totalScore}`
        }

        return false;
    }


}