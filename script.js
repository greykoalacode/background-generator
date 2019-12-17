var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
function background()
{
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
    css.textContent = body.style.background+";";
}
 background();


var shuffle= document.querySelector("#shuffle");
shuffle.addEventListener("click",generatr);

function change()
{
color1.addEventListener("input",background);
color2.addEventListener("input",background);
}
change();
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function generatr()
{
	color1.value=getRandomColor();
	color2.value=getRandomColor();
	background();
}