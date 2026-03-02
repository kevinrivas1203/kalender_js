

let title = document.getElementById ("Title")
title.textContent = "Kalender J-S"
console.log(title);


// Diese funtion sincronizert die Datum von h1 
function main_headline (){
    const today = new Date ();
    const option = {
        day: "numeric",
        month: "long",
        year: "numeric",
    } ;  
    const formattedDate = today.toLocaleDateString("de-DE", option);
    document.getElementById("main_headline").textContent = formattedDate;
}
setInterval(main_headline, 1000);
main_headline()
console.log();

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
console.log(monatZuruck)

// button nächte Monat 
const nextMonth = document.getElementById ("nextMonth");
console.log(nextMonth)
// Aktuel Datum in Text
function currently_day (){
    const today = new Date ();
    const option = {
        day: "numeric",
        month: "long",
        year: "numeric",
    } ;  
    const formattedDate = today.toLocaleDateString("de-DE", option);

    document.getElementById("currently_day").textContent = "Der " + formattedDate;
}
setInterval(currently_day, 1000);
currently_day()
// funktion button zurück


let date = new Date()
console.log()
let month = date.getMonth()
let day = date.getDate();
let year=date.getFullYear()