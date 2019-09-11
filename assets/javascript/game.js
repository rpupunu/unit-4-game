$(document).ready(function () {
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber; 
    var numberOptions;
    var crystal1;
    var crystal2; 
    var crystal3; 
    var crystal4; 
    gameReset();

    function randomizer() {
        randomNumber = Math.floor((Math.random() * 101) + 19);
        numberOptions = Array.from({ length: 4 }, () => Math.floor(Math.random() * 12) + 1);
        crystal1 = numberOptions[0];
        crystal2 = numberOptions[1];
        crystal3 = numberOptions[2];
        crystal4 = numberOptions[3];  
        console.log(crystal1, crystal2, crystal3, crystal4);
    }

    function gameReset() {
        randomizer();
        totalScore = 0;
        $("#totalScore").text(totalScore);
        $("#number-to-guess").text(randomNumber);
    }

    $(".button").on("click", function () {
        var crystalClick = $(this).attr("id");
        console.log(crystalClick);

        if (crystalClick === "crystal1") {
            totalScore = totalScore + crystal1;
            $("#totalScore").text(totalScore);
        };

        if (crystalClick === "crystal2") {
            totalScore = totalScore + crystal2;
            $("#totalScore").text(totalScore);
        };

        if (crystalClick === "crystal3") {
            totalScore = totalScore + crystal3;
            $("#totalScore").text(totalScore);
        };

        if (crystalClick === "crystal4") {
            totalScore = totalScore + crystal4;
            $("#totalScore").text(totalScore);
        };

        if (totalScore === randomNumber) {
            wins = wins + 1;
            $("#wins").text("Wins: " + wins);
            gameReset();
        }

        if (totalScore > randomNumber) {
            losses = losses + 1;
            $("#losses").text("Losses: " + losses);
            gameReset();

        }
    });
});
  

