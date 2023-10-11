let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

let currentTime = new Date();

// console.log(currentTime);


date.innerHTML = currentTime.getMonth();
month.innerHTML = currentTime.getDay();
year.innerHTML = currentTime.getFullYear();
hours.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
secs.innerHTML = currentTime.getSeconds();
