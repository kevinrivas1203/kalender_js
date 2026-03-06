

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

// alle Tag wird aktuel
function currently_dayName (){
    const today = new Date ();
    const option = {
        weekday: "long",
    } ;
    
    const formattedDate  = today.toLocaleDateString("de-DE", option);
      
    let nameWeeks = document.getElementsByClassName("nameWeek");
        for(let element of nameWeeks){
            element.textContent = formattedDate;
        }
}
currently_dayName()

// alle text Monat aktuel
function currentlyMonth () {
    const today = new Date ();
    const option ={
        month: "long"
    } ;
    const formattedDate = today.toLocaleDateString("de-DE",option);
    let nameMonths = document.getElementsByClassName ("nameMonth");
        for(let element of nameMonths){
            element.textContent=formattedDate;
        }
}
currentlyMonth()   
//aktuel Tag un rest tag
function getDayOfYear(date = new Date()) {
  const inicio = new Date(date.getFullYear(), 0, 0);
  const diferencia = date - inicio;
  const unDia = 1000 * 60 * 60 * 24;
  return Math.floor(diferencia / unDia);
}

function getRestDaysOfYear(date = new Date()) {
  const fin = new Date(date.getFullYear(), 11, 31);
  const diferencia = fin - date;
  const unDia = 1000 * 60 * 60 * 24;
  return Math.ceil(diferencia / unDia);
}

const diaDelAño = getDayOfYear();
const diasRestantes = getRestDaysOfYear();

document.getElementById("days_of_year").textContent = diaDelAño;
document.getElementById("rest_days_of_year").textContent = diasRestantes;

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

// button nächte Monat und zuruck
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
//Komplet Kalender Dynamisch
let tableKalender = document.getElementById("Kalender");
console.log(tableKalender)



let date = new Date()
console.log()
let month = date.getMonth()
let day = date.getDate();
let year=date.getFullYear(); 