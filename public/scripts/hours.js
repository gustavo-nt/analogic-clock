function setHour() {
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let seg = now.getSeconds();
    let mil = now.getMilliseconds();

    let pointerHour = hr * 30 + min/2;
    let pointerMinute = min * 6 + (seg*6)/60;
    let pointerSecond = seg * 6 + mil/166;

    hour.style.transform = `rotate(${pointerHour}deg)`;
    minute.style.transform = `rotate(${pointerMinute}deg)`;
    second.style.transform = `rotate(${pointerSecond}deg)`;
}
let intervalo = setInterval(setHour, 1);

var hours, min, sec;
var day = new Array('Domingo', "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
var month = new Array('Janeiro', 'Fevereiro', "Março", "Abril", "Maio", "Junho", "Junho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

function clock() {
    var date = new Date();

    hours = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
    min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

    var dayMonth = date.getDate().toString().length < 2 ? "0" + date.getDate() : date.getDate();

    var time = `${hours}:${min}:${sec}`;
    var fullDate = `${day[date.getDay()]} , ${dayMonth} de ${month[date.getMonth()]} de ${date.getFullYear()}`

    document.querySelector("#time").innerHTML = time;
    document.querySelector("#date").innerHTML = fullDate;
}

let time = setInterval(clock, 1000);
