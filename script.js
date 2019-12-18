var css=document.querySelector("h3");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.getElementById("gradient");

// to set initial color and its linear gradient code
function firstTime()
{
	color1.value="#fff800";
	color2.value="#005c30";
	background();
}

// to set background as gradient and change h3 value
function background()
{
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
    let bd = getComputedStyle(body);
    css.textContent = bd.backgroundImage + ';';
}

// to get random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//to generate random color
function generatr()
{
	color1.value=getRandomColor();
	color2.value=getRandomColor();
	background();
}
// order
firstTime();

var shuffle= document.querySelector("#shuffle");
shuffle.addEventListener("click",generatr);

color1.addEventListener("input",background);
color2.addEventListener("input",background);


