function controleren(){
    Q1 = document.getElementById("Q1").value;
    Q2 = document.getElementById("Q2").value;
    Q3 = document.getElementById("Q3").value;
     
    punten = 0;    

    puntenText = "punten";

    if (Q1 == "Madrid") {
        punten ++;
    }
    if (Q2 == "Middellandse zee") {
        punten ++;
    }
    if (Q3 == "15 paar") {
        punten ++;
    }
    if (punten == 1) {
        puntenText = "punt";
    }
    alert("je hebt " + punten + " " + puntenText);
    document.getElementById("punten").innerHTML = punten;
}