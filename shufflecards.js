function shuffleCards() {
    var numbers = new Array();
    var htmlDivStr = "";
    var teller = 0;
    var numberOfCards = 8;

    while (teller < numberOfCards) {
        var randomNumber = (math.random() * (numberOfCards / 2)) + 1;
        randomNumber = Math.floor(randomNumber);
        
        if (numbers[randomNumber] != 2) {
            if (numbers[randomNumber] == 1) {
                numbers[randomNumber] = '2';
            } 
            else{
                numbers[randomNumber] = '1';
            }
        }
        htmlDivStr = htmlDivStr + '<input type"button" value="'+ randomNumber + '" id="kaart" '+ teller +' class="memoryCard" onclick"checkClickedCard("'+ randomNumber +', \kaart '+ teller +'");" />';  
        teller++;
    }
    document.getElementById("memoryCards").innerHTML = htmlDivStr;
}