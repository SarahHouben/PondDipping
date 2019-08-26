class Bubble {
    constructor(answer, correct) {
        this.x = 100;
        this.y = windowHeight + 100;
        this.col = color(218, 246, 250, 70);
        this.diameter = random(120, 150);
        this.answer = answer;
        this.correct = correct;
    }


    display() {
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        this.y -= 2.5; //Lv 2: 2, Lv 3: 2.5
    };

    clicked() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.diameter / 2) {
            this.col = color(15, 79, 120);
        }
    }

}












// XOXXXXXX FIRST ATTEMPT
// class Bubble {

//     //Array with 3 circles
//     //property - clickable or not

//     // check distance to see if mouse is on?
//     //pop from array after click on

//     constructor() {
//         this.width = random(100, 200);
//         this.height = random(50, 200);
//         this.y = height;
//         this.x = width;
//     }

//     draw() {
//         circle(this.width, this.height);
//         // this.y -= 3;
//     }
// }