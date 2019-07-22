let pipeNorth = new Image();
let PipeSouth = new Image();
let birdd = new Image();
let bg = new Image();
let fg = new Image();
birdd.src = "images/bird.png";
bg.src = 'images/bg.png';
fg.src = 'images/fg.png';
pipeNorth.src = 'images/pipeNorth.png';
PipeSouth.src = 'images/PipeSouth.png';
var scor = new Audio();



// imgNames = ["bg.png","pipeNorth.png","pipeSouth","fg.png", "bird.png"];
// function loadImage() {
//     let imgCount = 0;
//     for (var i = 0; i < imgNames.length; i++) {
//         let img = new Image();
//         img.src = "images/" + imgNames[i];
//         img.onloadedmetadata = function() {
//             imgCount++;
//             if (imgCount == imgNames.length) {
//                 Oracale();
//             }
//         }
//     }
// }
let gap = 120;

let pipesize=80;
let Oracale = function (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    scor.src = "sounds/score.mp3";
    let pipe = [];

    pipe[0] = {
        x: canvas.width,
        y: 0
    };
    let score = 0;
    this.draw = function () {
        let constant = pipeNorth.height + gap;
        for (var i = 0; i < pipe.length; i++) {
            this.ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
            this.ctx.drawImage(PipeSouth, pipe[i].x, pipe[i].y + constant);

            pipe[i].x--;

            if (pipe[i].x === pipesize) {
                pipe.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
                });
            }
            if (drawbird.getx() + birdd.width >= pipe[i].x
                && drawbird.getx() <= pipe[i].x + pipeNorth.width
                && (drawbird.gety() <= pipe[i].y + pipeNorth.height
                    || drawbird.gety() + birdd.height >= pipe[i].y + constant)
                || drawbird.gety() + birdd.height >= canvas.height - fg.height) {
                location.reload(); // reload game
            }
            if (pipe[i].x === drawbird.getx()) {
                score += 1;
                scor.play();
            }


        }
        this.ctx.fillStyle = "#000";
        this.ctx.font = "20px Verdana";
        this.ctx.fillText("Score : " + score, 30, 30);

    }
};
let drawpipe = new Oracale(canvas);
drawpipe.draw();

function movebird() {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    drawbg.draw();
    drawpipe.draw();
    drawfg.draw();
    drawbird.draw();
    drawbird.move();
    requestAnimationFrame(movebird);
}

movebird();