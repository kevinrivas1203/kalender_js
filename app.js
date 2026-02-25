
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
 
let monat = document.getElementById ("monat");
monat.textContent ="Marz"
console.log (monat)

let datum = document.getElementsByClassName ("datum");
// console.log(datum)
for(let i = 0; i < datum.length; i++){
    datum[i].textContent = "Manfred"
}
console.log (datum)

// [tag1]
//  0     1     2