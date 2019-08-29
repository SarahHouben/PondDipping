class Background {

    setup() {
        this.bgWater = loadImage("./style_assets/water_background.png");
    };

    draw() {
        image(this.bgWater, 0, 0, width, height);
    }

}