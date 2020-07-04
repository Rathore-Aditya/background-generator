var body=document.getElementById("generator");
//console.log(body);
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
// console.log(color1);
function gradient()
{
    body.style.background="linear-gradient(to right"+","+color1.value+","+color2.value+")";
    var h3=document.querySelector("p");
    h3.textContent=body.style.background + ";";
}
color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);

