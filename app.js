
let username = "Anna";
let title = document.getElementById ("Title")
title.textContent = "Kalender J-S"
console.log(title);


let headline = document.getElementById ("main-headline");
headline.textContent = "Kalender JS"
console.log(headline);

 let infotext = document.getElementById ("infotext");
//  infotext.textContent = "10.Februar ashcajkssdfadffdfdf"
console.log (infotext);
// Kann die Monat in kalender änder 
let monat = document.getElementById ("monat");
monat.textContent ="Februar"
console.log (monat)

let datum = document.getElementsByClassName ("datum");
for(let i = 0; i < datum.length; i++){
    datum[i].textContent = "1 "
}
// button Monat Zurück
const monatZuruck = document.getElementById ("monatZuruck");
monatZuruck.textContent


