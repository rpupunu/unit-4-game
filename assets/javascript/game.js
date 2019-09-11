var randomNumber
var totalScore = 0;
var wins = 0;
var loses = 0;
var gameOver = false;
var crystal1
var crystal2
var crystal3
var crystal4

var randomNumber = Math.floor((Math.random() * 101) + 19);
    $("#number-to-guess").text(randomNumber);
    console.log(randomNumber);

var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 1);
    console.log(numberOptions);
    var crystal1 = numberOptions[0];
    var crystal2 = numberOptions[1];
    var crystal3 = numberOptions[2];
    var crystal4 = numberOptions[3];

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);


$(".button").on("click", function() {
    totalScore ;
    console.log(totalScore);
    if (totalScore === randomNumber) {
        wins +=1;
        $("#wins").text("Wins: " + wins);
    } 
    else if (totalScore >= randomNumber) {
        loses +=1;
        $("#loses").text("Loses: " + loses);
    }

});
////////////////////////////////

