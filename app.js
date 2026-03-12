

let title = document.getElementById ("Title")
title.textContent = "Kalender J-S"


let currentDate = new Date();
const monatInCalender = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const wocheTagen = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const tagesInCalender = document.querySelectorAll("tr.tagesNummer >td")
//-----------------------------RENDER-----------------------------------------------

renderWocheTagen()
renderKalenderTagen()
function renderText(){
    createCurrentlyDay();
    createWeekName();
    createCurrentlyMonthName();
    calculateAndRenderDaysInYear();
}

function renderPage(){
    renderKalenderTitel();
    renderText();
    renderKalender();
}


// Diese funtion sincronizert die Datum von h1 
function renderKalenderTitel (){
    const option = {
        day: "numeric",
        month: "long",
        year: "numeric",
    } ;  
    const formattedDate = currentDate.toLocaleDateString("de-DE", option);
    document.getElementById("main_headline").textContent = formattedDate;
}


// Aktuel Datum in Text
function createCurrentlyDay() {
    const option = {
        day: "numeric",
        month: "long",
        year: "numeric",
    } ;  
    const formattedDate = currentDate.toLocaleDateString("de-DE", option);
    
    let elements = document.getElementsByClassName("currently_day");
    
    for(let element of elements){
        element.textContent = formattedDate;
    }
}

// alle Tag wird aktuel
function createWeekName() {
    const option = {
        weekday: "long",
    } ;
    
    const formattedDate  = currentDate.toLocaleDateString("de-DE", option);
    
    let nameWeeks = document.getElementsByClassName("nameWeek");
    for(let element of nameWeeks){
        element.textContent = formattedDate;
    }
}

// alle text Monat aktuel
function createCurrentlyMonthName() {
    const option ={
        month: "long"
    } ;
    const formattedDate = currentDate.toLocaleDateString("de-DE",option);
    let nameMonths = document.getElementsByClassName ("nameMonth");
    for(let element of nameMonths){
        element.textContent=formattedDate;
    }
}
// rechnet die aktuel und rest Tage im Jahr
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

// Die button von Kalender ändern die Monat  
function changeToNextMonth(){
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() +1, currentDate.getDate());
    renderPage();
}

function changeToPreviousMonth(){
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() -1, currentDate.getDate());
    renderPage();
}

// // Tages in Kalender wird dynamisch
// function changeDayInCalender (){
//     let dayInMonth = document.getElementById("daysInMonth");
//     dayInMonth.innerHTML = ""; // ist Wichtig weil dann In Kalender leer und beim wechsel des Monat nicht überschreibt  
    
//     let firstDayMonth = new Date (year, month, 1).getDay();
//     let lastDays = new Date (year, month + 1,0).getDate();
    
//     let row;
//     for (let day = 1; day <=lastDays; day++){
//         date = new Date(year, month, day);
//         if(date.getDate() === 0 || day ===1){
//             row = document.createElement("tr");
//         }
//         let cell = document.createElement("td");
//         cell.innerHTML = day ;
//         row.appendChild(cell);
//         if(date.getDay() === 6 || day === lastDays){

//         }
//     }
// }
// changeDayInCalender ();





function renderKalender(){
    renderKalenderHeader();
}

function renderKalenderHeader(){
    document.getElementById ("nextMonth").onclick = changeToNextMonth;

    document.getElementById ("monatZuruck").onclick = changeToPreviousMonth;

    document.getElementById('monat').innerText = monatInCalender[currentDate.getMonth()];
}

function renderWocheTagen(){
  let weekdays = document.getElementById("weekDays");
  for (let i = 0; i< wocheTagen.length; i++){
      console.log (wocheTagen[i]);
  }
}



function renderKalenderTagen(){
   let tages = document.querySelectorAll("tr.tagesInCalender >td");
   for (let i = 0; i<= tagesInCalender.length ;i++){
    console.log(tagesInCalender)
   }
}
// let numero = ("dias del mes");
// for (let i = 1; i < 31 ; i++);
 
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
// console.log(tableKalender)

// Monat spring mit button
// document.getElementById("monat").textContent = meses [];
document.getElementById("monatZuruck").addEventListener("click",function(){

})    


renderPage();

// / *• Grundsätzliche Idee, über die Ihr nachdenken solltet (alternative Ansätze sind 
// möglich):
//     o renderCalendarStart();
//      o Für jeden Tag von calendarStart bis calendarEnd
//         ▪ if (weekStart) renderWeekStart();
//         ▪ render Day();
//         ▪ if (weekEnd) renderWeekEnd();
//     o renderCalendarEnd()


// */

// let month = date.getMonth()
// let day = date.getDate();
// let year=date.getFullYear(); 
 