const isDay = false;
const isLightOn = !isDay;
console.log("DayTime");
console.log(isDay);
console.log("lights on?");
console.log(isLightOn);
const batteryLevel = 50;
console.log("Nível da bateria?");
console.log(batteryLevel + "%");
const isWorking = isLightOn === true && batteryLevel > 0;
console.log("tudo funcionando?");
console.log(isWorking);
// parte de visualização
document.getElementById("status-dia").textContent = isDay ? "Período: Dia" : "Período: Noite";
document.getElementById("status-luz").textContent = isLightOn ? "Luz: Ligada" : "Luz: Desligada";
document.getElementById("status-final").textContent = isWorking ? "Sistema operacional" : "Sistema inoperante";
