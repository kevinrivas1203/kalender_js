

let title = document.getElementById ("Title")
title.textContent = "Kalender J-S"


let currentDate = new Date();
const monatInCalender = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const wocheTagen = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

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
    renderWocheTagen();
    renderKalenderTagen();
}

function renderKalenderHeader(){
    document.getElementById ("nextMonth").onclick = changeToNextMonth;

    document.getElementById ("monatZuruck").onclick = changeToPreviousMonth;

    document.getElementById('monat').innerText = monatInCalender[currentDate.getMonth()];
}

function renderWocheTagen(){
  let weekdays = document.getElementById("week");
  weekdays.innerHTML = "";
  for (let i = 0; i < wocheTagen.length; i++){
      let th = document.createElement("th");
      th.innerHTML = wocheTagen[i];
      weekdays.appendChild(th);
  }
}



function renderKalenderTagen(){
    let dayInMonth = document.getElementById("dayInMonth");
    dayInMonth.innerHTML = "";

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    let firstDayOfMonth = new Date(year, month, 1);
    let lastDayOfMonth = new Date(year, month + 1, 0);
    let lastDate = lastDayOfMonth.getDate();

    // Find the day of the week for the first day (0=Sunday, 1=Monday, etc.)
    let firstDayWeek = firstDayOfMonth.getDay();
    // Adjust for Monday start: if Sunday (0), make it 7
    if (firstDayWeek === 0) firstDayWeek = 7;

    let date = 1;
    let row;

    for (let i = 0; i < 6; i++) { // Up to 6 weeks
        row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j < firstDayWeek - 1) {
                // Empty cells before the first day
                cell.innerHTML = "";
            } else if (date > lastDate) {
                // Empty cells after the last day
                cell.innerHTML = "";
            } else {
                cell.innerHTML = date;
                if (date === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                    cell.classList.add("today"); // Optional: highlight today
                }
                date++;
            }
            row.appendChild(cell);
        }

        dayInMonth.appendChild(row);

        if (date > lastDate) break; // Stop if all days are rendered
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
