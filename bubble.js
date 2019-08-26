class Bubble {
    constructor(answer, correct, index) {
        this.x = random(140, width - 90)
        this.y = height + 100;
        this.col = color(218, 246, 250, 70);
        this.diameter = random(140, 180);
        this.index = index
        this.answer = answer;
        this.correct = correct;
    }


    display() {
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        this.y -= 1.8; //Lv 2: 2, Lv 3: 2.5

        //Collision check - END GAME if bubble reaches TOP of canvas
        if (this.y - (this.diameter / 2) <= 0) {
            // console.log(this.index)
            game.bubbles.splice(this.index, 4);
            noLoop();
        }
    };


    //Give Bubbles gittery-movement
    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }


    //Splice (pop) bubble once it has been clicked
    clicked() {
        let mouseDistance = dist(mouseX, mouseY, this.x, this.y); //dist() calculates the distance between two points x1,y1 and x2,y2
        if (mouseDistance < this.diameter / 2) {
            // this.col = color(0, 0, 0);
            game.bubbles.splice(this.index, 1);
        }
        return false;
    }

}



//INDIVIDUAL BUBBLES


//EQUIVALENT TO:        this.bubble = [];  ???
// var bubblesArray = [bubble1A, bubble1B, bubble1C, bubble2A, bubble2B, bubble2C];


// const bubble1A = {
//     answer = "answer One",
//     correct = "correct",
// }

// const bubble1B = {
//     answer = "answer Two",
//     correct = "false",
// }

// const bubble1C = {
//     answer = "answer Three",
//     correct = "false",
// }

// const bubble2A = {
//     answer = "answer four",
//     correct = "correct",
// }

// const bubble2B = {
//     answer = "answer five",
//     correct = "false",
// }

// const bubble2C = {
//     answer = "answer six",
//     correct = "false",
// }