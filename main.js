var mouseevent = "empty";
var canvas = document.getElementById("myCanvas");
var g = canvas.getContext("2d");

var color = "black";
var width = 1;
var radius = 40

var lastX, lastY;

canvas.addEventListener("mousedown", down);
function down(e)
{
    mouseevent = "mousedown";
    color = document.getElementById("id").value;
    width = document.getElementById("width").value;
}


canvas.addEventListener("mouseup", up);
function up(e)
{
    mouseevent = "mouseup";
}


canvas.addEventListener("mouseleave", leave);
function leave(e)
{
    mouseevent = "mouseleave";
}


canvas.addEventListener("mousemove", move);
function move(e)
{
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;

    if(mouseevent=="mousedown")
    {
        g.beginPath();
        g.strokeStyle = color;
        g.lineWidth = width;
        g.arc(currentx, currenty, radius, 0, 2*Math.PI);
        g.stroke()
    }

    lastX = currentx;
    lastY = currenty;
}



function clearArea(){
    g.clearRect(0, 0, canvas.width, canvas.height)
}