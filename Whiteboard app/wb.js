

let canvas = document.getElementById('canva');
let canvas_context = canvas.getContext("2d");
let plus=document.getElementById("increase");
let minus=document.getElementById("decrease");
let brushSize=document.getElementById("brushSize");
let changeColor=document.getElementById("setColor");
let clear=document.getElementById("cleanCanvas")

let size=15;
let x = undefined;
let y = undefined;
let isPressed=false;

canvas.addEventListener("mousedown", (touch) =>
{
 isPressed=true;
x=touch.offsetX;
y=touch.offsetY;
});

canvas.addEventListener("mouseup",()=>
{
   isPressed=false;
x=undefined;
y=undefined;

});

canvas.addEventListener("mousemove", (mouseOnCanvas) => {
    if(isPressed)
    {
        const x2 = mouseOnCanvas.offsetX;
        const y2 = mouseOnCanvas.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x=x2;
        y=y2;
    }

});

drawCircle = (x, y) => {

    canvas_context.beginPath();
    canvas_context.arc(x, y, size, 0, Math.PI * 2);
    canvas_context.fillStyle=changeColor;
    canvas_context.fill();
}


drawLine =(x1,y1,x2,y2) =>
{
 canvas_context.beginPath();
 canvas_context.moveTo(x1,y1);
 canvas_context.lineTo(x2,y2);
 canvas_context.strokeStyle=changeColor;
 canvas_context.lineWidth=size;
 canvas_context.stroke();
}


///increase and decrease the size///


plus.addEventListener("click",()=>
{
  size+=5;

  if(size>30)
  {
      size=50;
  }
  brushSizeUpdate();
});

minus.addEventListener("click",()=>
{
  size-=5;

   if(size<7)
   {
    size=7;
   }
   brushSizeUpdate();
});

brushSizeUpdate = () =>
{
    brushSize.innerHTML=size;
}

//setColor  ->

changeColor.addEventListener('change',(changing)=>
{
  changeColor=changing.target.value;
});

clear.addEventListener('click',()=>
{
  canvas_context.clearRect(0,0,canvas.width,canvas.height);
});

// draw =() =>
// {
//     canvas_context.clearRect(0,0,canvas.width,canvas.height);
//     drawCircle(x++,y);
//     requestAnimationFrame(draw);
// }

// draw();

