const togetherDate = new Date("July 18, 2025 00:00:00");
const endDate = new Date("July 18, 2026 00:00:00");

function update(){

    const now = new Date();

    // =====================
    // TIME TOGETHER
    // =====================

    let diffTogether = now - togetherDate;

    let tYears = Math.floor(diffTogether / (1000*60*60*24*365));
    let tMonths = Math.floor(diffTogether / (1000*60*60*24*30));
    let tWeeks = Math.floor(diffTogether / (1000*60*60*24*7));
    let tDays = Math.floor(diffTogether / (1000*60*60*24));
    let tHours = Math.floor(diffTogether / (1000*60*60));

    document.getElementById("tYears").innerText = tYears;
    document.getElementById("tMonths").innerText = tMonths;
    document.getElementById("tWeeks").innerText = tWeeks;
    document.getElementById("tDays").innerText = tDays;
    document.getElementById("tHours").innerText = tHours;

    // nicer summary
    let totalDays = Math.floor(diffTogether / (1000*60*60*24));
    let months = Math.floor(totalDays / 30);
    let days = totalDays % 30;

    document.getElementById("tSummary").innerText =
    `💕 ${months} months, ${days} days together`;

    // =====================
    // COUNTDOWN
    // =====================

    let diffCountdown = endDate - now;

    let cYears = Math.floor(diffCountdown / (1000*60*60*24*365));
    let cMonths = Math.floor(diffCountdown / (1000*60*60*24*30));
    let cWeeks = Math.floor(diffCountdown / (1000*60*60*24*7));
    let cDays = Math.floor(diffCountdown / (1000*60*60*24));
    let cHours = Math.floor(diffCountdown / (1000*60*60));
    let cSeconds = Math.floor(diffCountdown / 1000);

    document.getElementById("cYears").innerText = cYears;
    document.getElementById("cMonths").innerText = cMonths;
    document.getElementById("cWeeks").innerText = cWeeks;
    document.getElementById("cDays").innerText = cDays;
    document.getElementById("cHours").innerText = cHours;
    document.getElementById("cSeconds").innerText = cSeconds;
}

setInterval(update, 1000);
update();