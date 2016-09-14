var cancelMove= document.getElementById("container");
cancelMove.addEventListener("mouseover", function(){
    cancelAnimationFrame(goLeft);
    console.log("working"); 
});


var elem = document.getElementsByClassName('coffee');
var move = 10;

console.log("hello");


function goLeft() {
if (move>105){move=0;}

        elem[0].style.right = move + 0.3 + "%";
    var startFrame= requestAnimationFrame(goLeft);
        move = move + 0.3;

        elem[0].addEventListener('mouseover', function(){
            cancelAnimationFrame(startFrame);
        });

        var cancelMove= document.getElementById("container");
        cancelMove.addEventListener("mouseover", function(){
            cancelAnimationFrame(startFrame);
            console.log("working");
        });


}




requestAnimationFrame(goLeft);



var move2=25;

function goLeft2() {
if (move2>105){move2=0;}

        elem[1].style.right = move2 + 0.3 + "%";
        var startFrame2=requestAnimationFrame(goLeft2);
        move2 = move2 + 0.3;


        elem[1].addEventListener('mouseover', function(){
            cancelAnimationFrame(startFrame2);
        });
}
requestAnimationFrame(goLeft2);



var move3=45;

function goLeft3() {
if (move3>105){move3=0;}

        elem[2].style.right = move3 + 0.3 + "%";
        var startFrame3=requestAnimationFrame(goLeft3);
        move3 = move3 + 0.3;

}
requestAnimationFrame(goLeft3);



var move4 = 60;
function goLeft4() {
if (move4>105){move4=0;}

        elem[3].style.right = move4 + 0.3 + "%";
        requestAnimationFrame(goLeft4);
        move4 = move4 + 0.3;

}
requestAnimationFrame(goLeft4);


var move5 = 75;
function goLeft5() {
if (move5>105){move5=0;}

        elem[4].style.right = move5 + 0.3 + "%";
        requestAnimationFrame(goLeft5);
        move5 = move5 + 0.3;
}
requestAnimationFrame(goLeft5);


var move6 = 90;
function goLeft6() {
if (move6>105){move6=0;}

        elem[5].style.right = move6 + 0.3 + "%";
        requestAnimationFrame(goLeft6);
        move6 = move6 + 0.3;

}
requestAnimationFrame(goLeft6);


elem[0].addEventListener('mouseenter', function(){
    cancelAnimationFrame(goLeft);
});
