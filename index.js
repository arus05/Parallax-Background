// Canvas Setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
const IMAGE_WIDTH = 2400;

//Event Listener
const speedInput = document.getElementById("speed-input");
const speedText = document.getElementById("speed-text");
speedInput.addEventListener("input", ()=>{
  gameSpeed = speedInput.value;
  speedText.textContent = `Speed: ${speedInput.value}`;
})

const animateBtn = document.getElementById("animate-btn");
animateBtn.addEventListener("click", ()=>{
  if (animationFrame){
    stop();
  }
  else{
    animate();
  }
})

//Layer Class
class Layer{
    constructor(image, speedModifier){
      this.image = image;
      this.speedModifier = speedModifier;
      this.frame = 0;
    }

    draw(){
      ctx.drawImage(this.image, this.frame, 0);
      ctx.drawImage(this.image, this.frame + 2400, 0);

      if(this.frame <= -2400){
        this.frame = -1*gameSpeed*this.speedModifier;
      }
      else{
        this.frame -= gameSpeed*this.speedModifier;
      }
    }
}

//BACKGROUND LAYERS
const image1 = new Image();
image1.src = "./images/layer-1.png";
const layer1 = new Layer(image1, 0.5);

const image2 = new Image();
image2.src = "./images/layer-2.png";
const layer2 = new Layer(image2, 1);

const image3 = new Image();
image3.src = "./images/layer-3.png";
const layer3 = new Layer(image3, 1.5);

const image4 = new Image(); 
image4.src = "./images/layer-4.png";
const layer4 = new Layer(image4, 2);

const image5 = new Image();
image5.src = "./images/layer-5.png";
const layer5 = new Layer(image5, 3);

//animate function
let gameSpeed = 3;
let animationFrame; 

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  layer1.draw();
  layer2.draw();
  layer3.draw();
  layer4.draw();
  layer5.draw();
  animationFrame = requestAnimationFrame(animate);
}

function stop(){
  animationFrame = cancelAnimationFrame(animationFrame);
}

 //animate();