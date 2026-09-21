let isDay = false;
let isLightOn = !isDay;
const batteryLevel = 5;

console.log("DayTime");
console.log(isDay);
console.log("Lights on?");
console.log(isLightOn);
console.log("Nivel da bateria?");
console.log(batteryLevel + "%");
let isWorking = isLightOn === true && batteryLevel > 0;
console.log("tudo funcionando?");
console.log(isWorking);
function atualizarTela() {
  isLightOn = !isDay;
  isWorking = isLightOn === true && batteryLevel > 0;
  document.getElementById("status-dia").textContent = isDay ? "Período: Dia" : "Período: Noite";
  document.getElementById("status-luz").textContent = isLightOn ? "Luz: Ligada" : "Luz: Desligada";
  document.getElementById("status-final").textContent = isWorking ? "Sistema operacional" : "Sistema inoperante";
  document.getElementById("nivel").style.width = batteryLevel + "%";
  const lamp = document.getElementById("lampada");
  if(isLightOn){
    lamp.classList.add("acesa");
    document.body.style.background = isDay ? "#3a3a2a" : "#1a1a2e"; // noite com luz acesa fica amarelinho
  } else {
    lamp.classList.remove("acesa");
    document.body.style.background = isDay ? "#87CEEB" : "#0f0f1a"; // dia claro / noite escura
  }
}
function trocarDiaNoite(){
  isDay = !isDay;
  atualizarTela();
}
atualizarTela();
