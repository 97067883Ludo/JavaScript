//speler1 object
var speler1 = {
    item: ''
}
//played string word naar index.html gestuurd
var palyedp1 = '';


//speler2 object
var speler2 = {
    item: ''
}
//played string wordt naar index.html gestuurd
var palyedp2 = '';


//houdt bij welke ronde het is
ronde = 0;

function play() {
    ronde++

    setp1 = Math.floor(Math.random() * 3 + 1)
    setp2 = Math.floor(Math.random() * 3 + 1)
    console.log(setp1, setp2)
    
    switch (setp1) {
        case 1:
            speler1.item = 1
            palyedp1 = 'Steen'
            break;
        case 2:
            speler1.item = 2
            palyedp1 = 'Papier'
            break;
        case 3:
            speler1.item = 3
            palyedp1 = 'Schaar'
            break;
    }

    switch (setp2) {
        case 1:
            speler2.item = 1
            palyedp2 = 'Steen'
            break;
        case 2:
            speler2.item = 2
            palyedp2 = 'Papier'
            break;
        case 3:
            speler2.item = 3
            palyedp2 = 'Schaar'
            break;
    }

    



    document.getElementById("playedp1").innerHTML = 'Gekozen: ' + palyedp1
    document.getElementById("playedp2").innerHTML = 'Gekozen: ' +  palyedp2
    document.getElementById("ronde").innerHTML = 'Ronde: ' + ronde
}

