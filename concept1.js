function setup(){
    createCanvas(800, 800); // size of canvas for drawing

}

function draw () {
    
    if (mouseIsPressed) {
        fill(0);
    }
        else {
            fill(255);
        }
     // background color for whole canvas 
    ellipse (mouseX, mouseY, 80, 80);
    
}