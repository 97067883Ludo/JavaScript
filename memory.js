
punten = 0;
userClick =0;
card1Clicked = 0;
card2Clicked = 0;
card1ClickedNummer =0;
card2ClickedNummer =0;
document.getElementById("punten").innerHTML = "Punten: " + punten;

function cardSelected(cardId, cardNummer) {
    document.getElementById(cardNummer).value = cardId;
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
        }
    }
    if (punten == 2) {
        document.getElementById("resetGame").style.display = "block";
    }
}
function resetGame(params) {
    punten = 0;
    userClick =0;
    card1Clicked = 0;
    card2Clicked = 0;
    card1ClickedNummer =0;
    card2ClickedNummer =0;
    document.getElementById("resetGame").style.display = "none";
    document.getElementById("punten").innerHTML = "Punten: " + punten;
    for (let i = 1; i <= 4; i++) {
        document.getElementById("kaart" + i).value = " ";
    }
}