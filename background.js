class Background {

    setup() {
        this.bgWater = loadImage("./style_assets/sun-shining-through-water.png");
    };

    draw() {
        image(this.bgWater, 0, 0, width, height);
    }

}