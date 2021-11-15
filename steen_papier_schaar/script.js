// 1: steen
// 2: papier
// 3: schaar

var userChoice =0;
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
    document.getElementById("playedp2").innerHTML = computerChoiceString + "(" + computerChoice + ")";
    if (userChoice < computerChoice) {
        alert("jsdkfjslkdjflksdf")
    }


}