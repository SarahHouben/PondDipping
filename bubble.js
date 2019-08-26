class Bubble {
    constructor(answer, correct) {
        this.x = 200;
        this.y = windowHeight + 100;
        this.col = color(218, 246, 250, 70);
        this.diameter = random(140, 180);
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
            noLoop();
        }


    };

    // clicked() {
    //     var d = dist(mouseX, mouseY, this.x, this.y);
    //     if (d < this.diameter / 2) {
    //         this.col = color(15, 79, 120);
    //     }
    // }

}