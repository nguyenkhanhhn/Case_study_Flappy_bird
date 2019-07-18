
let canvas = document.getElementById("myCanvas");
let Background = function (canvas, x, y, img) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.img = img;

    this.draw = function () {
        let img = new Image();
        img.src = "images/" + this.img;
        this.ctx.drawImage(img, this.x, this.y);
    }
}
let drawbg = new Background(canvas, 0, 0, "bg.png");
let drawfg = new Background(canvas, 0, 394, "fg.png");
    drawbg.draw();
    drawfg.draw();


