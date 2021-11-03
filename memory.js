
userClick =0;
card1Clicked = 0;
card2Clicked = 0;
card1ClickedNummer =0;
card2ClickedNummer =0;

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
            alert("yay");
        }else{
            card1Clicked = 0;
            card2Clicked = 0;
            document.getElementById(card1ClickedNummer).value = " ";
            document.getElementById(card2ClickedNummer).value = " ";
        }
    }

}