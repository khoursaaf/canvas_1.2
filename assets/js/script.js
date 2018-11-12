var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(300,300);
ctx.lineTo(100,300);
ctx.lineTo(100,100);
ctx.fillStyle = "gold";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rotate(Math.PI / 4);
ctx.fillRect(140, -140, 140, 140);
ctx.fillStyle = "gold";
ctx.fill();
ctx.closePath();