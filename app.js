

let title = document.getElementById ("Title")
title.textContent = "Kalender J-S"
console.log(title);

let today = new Date();
const monatInCalender = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];


//-----------------------------RENDER-----------------------------------------------



// Diese funtion sincronizert die Datum von h1 
function renderKalenderTitel (){
    const option = {
        day: "numeric",
        month: "long",
        year: "numeric",
    } ;  
    const formattedDate = today.toLocaleDateString("de-DE", option);
    document.getElementById("main_headline").textContent = formattedDate;
}


// Aktuel Datum in Text
function createCurrentlyDay() {
    // const today = new Date ();
    const option = {
        day: "numeric",
        month: "long",
        year: "numeric",
    } ;  
    const formattedDate = today.toLocaleDateString("de-DE", option);
    
    let elements = document.getElementsByClassName("currently_day");
    
    for(let element of elements){
        element.textContent = formattedDate;
    }
}

// alle Tag wird aktuel
function createWeekName() {
    // const today = new Date ();
    const option = {
        weekday: "long",
    } ;
    
    const formattedDate  = today.toLocaleDateString("de-DE", option);
    
    let nameWeeks = document.getElementsByClassName("nameWeek");
    for(let element of nameWeeks){
        element.textContent = formattedDate;
    }
}

// alle text Monat aktuel
function createCurrentlyMonthName() {
    // const today = new Date ();
    const option ={
        month: "long"
    } ;
    const formattedDate = today.toLocaleDateString("de-DE",option);
    let nameMonths = document.getElementsByClassName ("nameMonth");
    for(let element of nameMonths){
        element.textContent=formattedDate;
    }
}

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

function calculateAndRenderDaysInYear(){
    document.getElementById("days_of_year").textContent = getDayOfYear();
    document.getElementById("rest_days_of_year").textContent = getRestDaysOfYear();
}

function renderText(){
    createCurrentlyDay();
    createWeekName();
    createCurrentlyMonthName();
    calculateAndRenderDaysInYear();
}

function renderPage(){
    renderKalenderTitel();
    renderText();
}


function changeToNextMonth(){
    today = new Date(today.getFullYear, today.getMonth +1, today.getDate);
    renderPage();
}
//Elements
const nextMonth = document.getElementById ("nextMonth");
nextMonth.onclick = changeToNextMonth();

const monatZuruck = document.getElementById ("monatZuruck");
console.log(monatZuruck)

// button nächte Monat und zuruck
console.log(nextMonth)

// Kann die Monat in kalender änder 
// let monat = document.getElementById ("monat");

// let datum = document.getElementsByClassName ("datum");
// for(let i = 0; i < datum.length; i++){
//     datum[i].textContent = "1 "
// }
// button Monat Zurück


// setInterval(currently_day, 1000);
// currently_day()
//Komplet Kalender Dynamisch
let tableKalender = document.getElementById("Kalender");
console.log(tableKalender)

// Monat spring mit button
// document.getElementById("monat").textContent = meses [];
document.getElementById("monatZuruck").addEventListener("click",function(){

})    


renderPage();


// let month = date.getMonth()
// let day = date.getDate();
// let year=date.getFullYear(); 
