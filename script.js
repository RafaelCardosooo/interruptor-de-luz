const isDay = false;
const isLightOn = isDay;
console.log("DayTime");
console.log(isDay);
console.log("Light on");
console.log(isLightOn);
let batteryLevel = 100;
console.log("Nivel da bateria");
console.log(batteryLevel + "%");
let isWorking = isLightOn === true && batteryLevel > 0;
console.log("tudo funcionando");
console.log(isWorking);
document.getElementById("status-dia").textContent = isDay ? "Periodo: Dia" : "Periodo: Noite";
document.getElementById("status-luz").textContent = isLightOn ? "Luz: Ligada" : "Luz: Desligada";
document.getElementById("status-final").textContent = isWorking ? "Sistema operacional" : "Sistema inoperante";
document.getElementById("status-bateria").textContent = batteryLevel + "%";
let luzLigada = isLightOn;
let timer = null;
function clicarInterruptor() {
  luzLigada = !luzLigada;
  document.getElementById("status-luz").textContent = luzLigada ? "Luz: Ligada" : "Luz: Desligada";
  isWorking = luzLigada === true && batteryLevel > 0;
  document.getElementById("status-final").textContent = isWorking ? "Sistema operacional" : "Sistema inoperante";
  if (luzLigada) {
    timer = setInterval(() => {
      if (batteryLevel > 0) {
        batteryLevel--;
        document.getElementById("status-bateria").textContent = batteryLevel + "%";
      } else {
        clearInterval(timer);
        document.getElementById("status-final").textContent = "Bateria acabou!";
      }
    }, 1000);
  } else {
    clearInterval(timer);
  }
}
document.getElementById("btn-luz").onclick = clicarInterruptor;