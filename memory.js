punten = 0;
userClick =0;
card1Clicked = 0;
card2Clicked = 0;
card1ClickedNummer =0;
card2ClickedNummer =0;
document.getElementById("punten").innerHTML = "Punten: " + punten;

function cardSelected(cardId, cardNummer) {
    document.getElementById(cardNummer).value = cardId;
    document.getElementById(cardNummer).disabled = true;
    if (userClick == 0) {
    userClick = 1;
    card1ClickedNummer = cardNummer;
    card1Clicked = cardId;
    }else{
        card2ClickedNummer = cardNummer;
        userClick = 0;
        card2Clicked = cardId;
        if (card1Clicked == card2Clicked) {
            punten++;
            document.getElementById("punten").innerHTML = "Punten: " + punten;
        }else{
            card1Clicked = 0;
            card2Clicked = 0;
            document.getElementById(card1ClickedNummer).value = " ";
            document.getElementById(card2ClickedNummer).value = " ";
            document.getElementById(card2ClickedNummer).disabled = false;
            document.getElementById(card1ClickedNummer).disabled = false;
        }
    }
    if (punten == 4) {
        document.getElementById("resetGame").style.display = "block";
    }
}
function resetGame(params) {
    ShuffleCards()
    punten = 0;
    userClick =0;
    card1Clicked = 0;
    card2Clicked = 0;
    card1ClickedNummer =0;
    card2ClickedNummer =0;
    document.getElementById("resetGame").style.display = "none";
    document.getElementById("punten").innerHTML = "Punten: " + punten;
    for (let i = 1; i <= 8; i++) {
        document.getElementById("kaart" + i).value = " ";
        document.getElementById("kaart" + i).disabled = false;
    }
}

function ShuffleCards() {
    var htmlDivStr = "";
    let elementCount = document.getElementById("count_elements").childElementCount;
    let numberOfCards = elementCount / 2;
    for (teller = 0; teller <= numberOfCards; teller++) {
        randomNumber = Math.floor(Math.random() * 4 + 1);
        console.log(randomNumber);
    }
}