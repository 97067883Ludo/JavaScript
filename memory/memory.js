punten = 0;
userClick =0;
card1Clicked = 0;
card2Clicked = 0;
card1ClickedNummer =0;
card2ClickedNummer =0;
numberOfClicks = 0;
document.getElementById("punten").innerHTML = "Punten: " + punten;
card1 = 'images/cow.webp';
var audio1 = new Audio('Card-flip-sound-effect.mp3');
var audio2 = new Audio('Card-flip-sound-effect.mp3');


function cardSelected(cardId, cardNummer) {
    
    document.getElementById(cardNummer).src = 'images/' + cardId + '.png';
    document.getElementById(cardNummer).disabled = true;
    if (userClick == 0) {
    userClick = 1;
    card1ClickedNummer = cardNummer;
    card1Clicked = cardId;
    numberOfClicks += 1;
    document.getElementById("clicks").innerHTML = "Aantal click's: " + numberOfClicks;
    audio1.play();
    }else{
        card2ClickedNummer = cardNummer;
        userClick = 0;
        card2Clicked = cardId;
        numberOfClicks += 1;
        document.getElementById("clicks").innerHTML = "Aantal click's: " + numberOfClicks;
        audio2.play();
        if (card1Clicked == card2Clicked) {
            punten++;
            document.getElementById("punten").innerHTML = "Punten: " + punten;
        }else{
            setTimeout(function() {
                card1Clicked = 0;
                card2Clicked = 0;
                document.getElementById(card1ClickedNummer).src = "images/default.png";
                document.getElementById(card2ClickedNummer).src = "images/default.png";
                document.getElementById(card2ClickedNummer).disabled = false;
                document.getElementById(card1ClickedNummer).disabled = false;
            }, 1000);
        }
    }
    if (punten == 4) {
        document.getElementById("resetGame").style.display = "block";
    }
}

function resetGame() {
    punten = 0;
    userClick =0;
    card1Clicked = 0;
    card2Clicked = 0;
    card1ClickedNummer =0;
    card2ClickedNummer =0;
    numberOfClicks = 0;
    document.getElementById("clicks").innerHTML = "Aantal click's: " + numberOfClicks;
    document.getElementById("resetGame").style.display = "none";
    document.getElementById("punten").innerHTML = "Punten: " + punten;
    for (let i = 1; i <= 8; i++) {
        document.getElementById("kaart" + i).value = " ";
        document.getElementById("kaart" + i).disabled = false;
    }
    ShuffleCards()
}

function ShuffleCards() {
    var htmlDivStr = "";
    let numberOfCard = document.getElementById("count_elements").childElementCount;
    let numberOfCards = numberOfCard / 2;
    let teller = 0;
    let kaartTeller = 0;
    let numbers = new Array();
    while( teller < numberOfCards) {

        randomNumber = Math.floor(Math.random() * numberOfCards + 1);
        //console.log(randomNumber);

        if (numbers[randomNumber] != 2) {
            kaartTeller ++;
            if (numbers[randomNumber] == 1) {
                numbers[randomNumber] = '2';
                htmlDivStr = htmlDivStr + '<input type="image" class="btn btn-card btn-primary" value=" " id="kaart'+ kaartTeller +'" src="images/default.png" onclick="cardSelected('+randomNumber+', \'kaart'+kaartTeller+'\')">';
                teller++;
            }else{            
                numbers[randomNumber] = '1';
                htmlDivStr = htmlDivStr + '<input type="image" class="btn btn-card btn-primary" value=" " id="kaart'+ kaartTeller +'" src="images/default.png" onclick="cardSelected('+randomNumber+', \'kaart'+kaartTeller+'\')">';
            }
        }
    }
    document.getElementById("count_elements").innerHTML = htmlDivStr;
    //console.log(numbers);
}