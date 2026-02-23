
const weekdays =["So" ,"Mo" ,"Di" ,"Mi" ,"Do" ,"Fr" ,"Sa"]
const today = new Date();


const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const weekday = today.getDay();

console.log(weekdays[weekday]);