// 1: steen
// 2: papier
// 3: schaar

var ronde = 0;
var userChoice =0;
var winner;
var pointsU=0;
var pointsC=0;
var finalWinner =0;
function play() {

    if (ronde == 3) {
        return;
    }
    //vraag de user voor input
    var userInput = prompt("wat speel jij?");
    //als de gebruiker niks heeft ingevuld return.
    if (userInput == null) {
        return;
    }
    //zet de user input naar lowercase
    userInput.toLowerCase();
    //kijk wat de gebruiker in heeft gevuld
    switch (userInput) {
        case 'steen':
            userChoice = 'steen';
            break;
        case 'papier':
            userChoice = 'papier';
            break;
        case 'schaar':
            userChoice = 'schaar';
            break;
        default:
        alert("niet goed ingevuld, steen, papier, schaar");
        return;
            break;
    }

    //de computer een keuze laten maken
    var computerChoice = Math.floor(Math.random() * 3 + 1);
    //maak een vaiabel met de gekozen item als string
    var computerChoiceString = "";
    //kijk wat de computer heeft gekozen en zet de string bij de juiste waarde
    switch (computerChoice) {
        case 1:
            computerChoiceString = "steen";
            break;
        case 2:
            computerChoiceString = "papier";
            break;
        case 3: 
            computerChoiceString = "schaar";
            break; 
    }

    //schrijf alle variabelen naar de index.html
    document.getElementById("playedp1").innerHTML = userChoice;
    //print de computer keuze op het beeldscherm
    document.getElementById("playedp2").innerHTML = computerChoiceString;

    winnerR = checkWinner(userChoice + computerChoiceString);

    WinnerLocation = document.getElementById("winnerstatus").innerHTML = winnerR;

    ronde++;
    document.getElementById('ronde').innerHTML = ronde;
    if (winner == 1) {
        pointsU ++;
        document.getElementById("pp1").innerHTML = "Punten: " + pointsU;
    }
    if (winner == 0) {
        pointsC ++;
        document.getElementById("pp2").innerHTML = "Punten: " + pointsC;
    }

    if (ronde == 3) {
        if (pointsU < pointsC) {
            finalWinner =1; //computer wint
            document.getElementById('finalwinner').innerHTML = 'de computer heeft deze ronde gewonnen';
        }
        if (pointsU > pointsC) {
            finalWinner =2; //User wint
            document.getElementById('finalwinner').innerHTML = 'jij hebt deze ronde gewonnen';
        }
        if (pointsU == pointsC) {
            finalWinner = 3;
            document.getElementById('finalwinner').innerHTML = 'deze ronde is een Tie';
        }
    }

}


function checkWinner(choices) {
    switch (choices) {
        case 'steensteen':
            winner = 2;
            return "Tie";
        case 'steenschaar':
            winner = 1;
            return 'Jij wint!';
        case 'steenpapier':
            winner = 0;
            return 'Computer wint!';
        case 'schaarsteen':
            winner = 0;
            return'Computer wint!';
        case 'schaarschaar':
            winner = 2;
            return'Tie';
        case 'schaarpapier':
            winner = 1;
            return 'Jij wint!';
        case 'papiersteen':
            winner = 1;
            return'Jij wint!';
        case 'papierpapier':
            winner = 2;
            return 'Tie';
        case 'papierschaar':
            winner = 0;
            return 'Computer wint!';
    }

}
function resetGame() {
    ronde = 0;
    userChoice =0;
    winner;
    pointsU=0;
    pointsC=0;
    finalWinner =0;
    document.getElementById("ronde").innerHTML = 0;
    document.getElementById("playedp1").innerHTML = ' ';
    document.getElementById("playedp2").innerHTML = ' ';
    WinnerLocation = document.getElementById("winnerstatus").innerHTML = ' ';
    document.getElementById("pp1").innerHTML = "Punten: " + 0;
    document.getElementById("pp2").innerHTML = "Punten: " + 0;
    document.getElementById('finalwinner').innerHTML = ' ';
}