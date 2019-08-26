class Game {

    constructor() {
        this.background = new Background();
        this.bubble = [];
    };

    setup() {
        this.background.setup();
        // this.bubble.setup();
        this.bubble.push(new Bubble("I am an answer", true));
    };

    draw() {
        this.background.draw();
        console.log(this.bubble);

        this.bubble.map((bub) => bub.display())
    }

}




//ADD COLLISION CHECK FUNCTION
//to see if bubble touches the TOP of the canvas
//when bubble touches TOP = Game Over 



// collisionCheck(bub, player) {
//     if (player.x + player.width <= obstacle.x || // player's right edge is left of the left edge of the obstacle    
//         obstacle.x + obstacle.width <= player.x) // obstacle's right edge is left of the left edge of the player
//     {
//         return false;    
//     }
//     if (player.y + player.height <= obstacle.y || // player's bottom edge is top of the obstacle's top edge 
//         obstacle.y + obstacle.height <= player.y) //obstacle's bottom edge is top of the players's top edge 
//     {
//         return false;    
//     }
//     return true;
// }





