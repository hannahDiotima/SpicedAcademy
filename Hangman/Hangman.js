var word  = 'ladybug';
var wordLength = word.length;
var lines= [];


for (var i=0; i<wordLength; i++) {
    lines.push("_");
}

var linesJ=lines.join(" ");


console.log(lines);

var wordContainer= document.getElementById('wordContainer');
wordContainer.innerHTML = linesJ;

var userInput= document.getElementById('letters');

var button= document.getElementById("button");
button.addEventListener("click",function(){
    console.log(userInput.value);
    var letterPositioning= whereIsTheLetter(word, userInput.value);
    console.log(letterPositioning);

});

function whereIsTheLetter(checkedWord, letter){
    var positions=[];
    for (var i=0; i<checkedWord.length; i++){
        if (letter == checkedWord[i]){
            positions.push(i);
        }
    }
    return positions;

}
