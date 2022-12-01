var a=Math.random()*6+1;
var num1=Math.floor(a);
var image1 = "dice" + num1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);
var b=Math.random()*6+1;
var num2=Math.floor(b);
var image2 = "dice" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);
if(num1>num2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!"; 
}