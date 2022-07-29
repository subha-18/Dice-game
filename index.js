var player1 = "Player 1";
var player2 = "Player 2";
  
function editNames() {
    player1 = prompt("Enter Player1 name");
    player2 = prompt("Enter player2 name");
  
    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}


function rollTheDice() {
    setTimeout(function () {

let x1 = Math.floor(Math.random()*6+1);
let x2 = Math.floor(Math.random()*6+1);
let y1 = ("images/dice" + x1 +".png");
let y2 = ("images/dice" + x2 +".png");
document.querySelector("img.img1").setAttribute("src",y1);
document.querySelector("img.img2").setAttribute("src",y2);

let t;
if(x1>x2)
    t=(player1 + " wins");
else if (x1<x2)
    t=(player2 + " wins");
else if(x1==x2)
    t=("Draw");
else t=("Start rolling!");
document.querySelector("h1").innerHTML=t;
    },1000);
}