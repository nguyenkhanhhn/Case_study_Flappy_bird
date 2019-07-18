const birdup = 25;
let Ojectbird = function (canvas, x, y, img) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.img = img;
    this.getx=function () {
        return this.x;

    }
    this.gety=function () {
        return this.y;

    }
    this.draw = function () {
        let bird = new Image();
        bird.src = "images/" + this.img;
        this.ctx.drawImage(bird, this.x, this.y);
    };
    this.move = function () {
        this.y += 1;
    }

    this.fly = function () {
        this.y -= 25;
    }

};
let drawbird = new Ojectbird(canvas, 10, 150, "bird.png");
drawbird.draw();



document.addEventListener("keydown", moveUp);

function moveUp() {
    drawbird.fly();
}

