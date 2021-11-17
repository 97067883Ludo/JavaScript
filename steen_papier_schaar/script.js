// 1: steen
// 2: papier
// 3: schaar

var ronde = 0;
var userChoice =0;
var winner;
var pointsU=0;
var pointsC=0;
function play() {
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
            userChoice = 1;
            break;
        case 'papier':
            userChoice = 2;
            break;
        case 'schaar':
            userChoice = 3;
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
    document.getElementById("playedp1").innerHTML = userInput + "(" + userChoice + ")";
    //print de computer keuze op het beeldscherm
    document.getElementById("playedp2").innerHTML = computerChoiceString + "(" + computerChoice + ")";

    winnerR = checkWinner(userChoice, computerChoice);

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
}


function checkWinner(userChoice, computerChoice) {
    if (userChoice == 2 && computerChoice == 1) {
        winner = 1
        return 'Jij wint!';
    } 
    if (userChoice == 3 && computerChoice == 2) {
        winner = 0;
        return 'computer wint!';
    }
    if (userChoice == 1 && computerChoice == 3) {
        winner = 1;
        return 'jij Wint!';
    }
    if (computerChoice == 2 && userChoice == 1) {
        winner = 0;
        return 'Computer wint!';
    } 
    if (computerChoice == 3 && userChoice == 2) {
        winner = 0;
        return 'computer wint!';
    }
    if (computerChoice == 1 && userChoice == 3) {
        winner = 0;
        return 'computer wint!';
    }
    if (computerChoice == userChoice) {
        winner = 2;
        return 'tie';
    }

}

function writeToHtml() {
    
}


//if ((ComputerIn) % 3 + 1 == userInput)
//    return "Win";
//else if ((userInput) % 3 + 1 == ComputerIn)
//    return "Lose"