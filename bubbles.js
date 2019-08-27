class Bubble {
    constructor(answer, correct, index) {
        this.x = random(140, width - 90);
        this.y = height + 100;
        this.col = color(218, 246, 250, 70);
        this.diameter = random(140, 180);

        this.answer = answer;
        this.correct = correct;

    }



    display() {

        //draws bubbles
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        //move bubbles upwards
        this.y -= 3; //Lv 1: 1.8, Lv 2: 2, Lv 3: 2.5

        //Collision check - end game if bubble reaches TOP of canvas
        if (this.y - (this.diameter / 2) <= 0) {

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

                //Pop all bubbles (prevents game over by left-over bubbles touching canvas top)
                game.bubbles[game.group].splice(0, 3);

                //Initiate new question: Add 1 to   game.group counter to Start next Question group 
                game.group += 1;


                //WRONG ANSWER
                //This group continues until either correct bubble is popped or game is over as bubbles touch canvas top
            } else if (game.bubbles[game.group][bubbleIndex].correct === false) {
                //Add 1 Minuspoint to Minuspoints-Score
                minusPoints += 1;

                //Show updated Minuspoints in browser
                document.querySelector(".minus-points").innerText = `Minus-Points: ${minusPoints}`

                // Pop clicked bubble
                game.bubbles[game.group].splice(bubbleIndex, 1);
            }

            // Calculate total Score
            totalScore = plusPoints - minusPoints;
            // Show Total Score in browser
            document.querySelector(".total-score").innerText = `Total Score: ${totalScore}`
        }

        return false;
    }



}