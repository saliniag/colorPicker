var first = document.getElementById("red");
let second = document.getElementById("green");
let third = document.getElementById("blue");
var box = document.getElementById("color");
var button = document.getElementById("btn1");
var clearButton = document.getElementById("btn2");
var num1=255;

    
var num2 = 0;
    
var num3 = 0;
    




function MyColor() {
    num1 = parseInt(first.value);
    num2 = parseInt(second.value);
    num3 = parseInt(third.value);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 < 0 || num2 < 0 || num3 < 0 || num1 > 255 || num2 > 255 || num3 >255)
    {
        alert("please enter a number between 0 and 255.");
        ClearAll();
    }
    else {
        return box.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
        ShowHex();
    }
}
function color() {
    MyColor();

}


function rgbToHex(rgb)
{
    var hex = Number(rgb).toString(16);
    if (hex.length < 2)
    {
        hex = "0" + hex;
    }
    return hex;
}

function FullHex(r,g,b)
{
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "HEX Value is:  #"+red + green + blue;

}

function ShowHex() {
    var hexValue= FullHex(num1,num2,num3);
    document.getElementById("output").innerHTML=hexValue;
    
}

function ClearAll() {
    first.value = "";
    second.value = "";
    third.value = "";
    box.style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("output").innerHTML = "";

}


button.addEventListener("click", color, false);
clearButton.addEventListener("click", ClearAll, false);
button.addEventListener("click", ShowHex, false);