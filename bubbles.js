class Bubble {
    constructor(answer, correct, index) {
        this.x = random(140, width - 90);
        this.y = height + 100;
        this.col = color(218, 246, 250, 70);
        this.diameter = random(140, 180);
        this.index = index;
        this.answer = answer;
        this.correct = correct;
    }


    display() {

        //draws bubbles
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        this.y -= 3; //Lv 1: 1.8, Lv 2: 2, Lv 3: 2.5

        //Collision check - END GAME if bubble reaches TOP of canvas
        if (this.y - (this.diameter / 2) <= 0) {
            game.bubbles = []; //pops bubbles if they reach top of canvas
            noLoop();
        }
    };


    //Give Bubbles gittery-movement
    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }


    //Splice (pop) bubble once it has been clicked
    clicked(bubbleIndex) {
        let mouseDistance = dist(mouseX, mouseY, this.x, this.y); //dist() calculates the distance between two points x1,y1 and x2,y2
        if (mouseDistance < this.diameter / 2) {
            game.bubbles[game.group].splice(bubbleIndex, 1);
        }
        return false;
    }



     //Splice (pop) bubble once it has been clicked
     clicked(bubbleIndex) {
        let mouseDistance = dist(mouseX, mouseY, this.x, this.y); //dist() calculates the distance between two points x1,y1 and x2,y2
        if (mouseDistance < this.diameter / 2) {
            game.bubbles[game.group].splice(bubbleIndex, 1);
        }
        return false;
    }


    

}