// CORRIGIDO: troquei const por let pra poder trocar de dia/noite
let isDay = false; 
let isLightOn = !isDay;
const batteryLevel = 5;

console.log("DayTime");
console.log(isDay);
console.log("Lights on?");
console.log(isLightOn);
function atualizarTela() {
  isLightOn = !isDay;
  let isWorking = isLightOn === true && batteryLevel > 0;
  document.getElementById("status-dia").textContent = isDay ? "Período: Dia" : "Período: Noite";
  document.getElementById("status-luz").textContent = isLightOn ? "Luz: Ligada" : "Luz: Desligada";
  document.getElementById("status-final").textContent = isWorking ? "Sistema operacional" : "Sistema inoperante";
  document.getElementById("nivel").style.width = batteryLevel + "%";
  const lamp = document.getElementById("lampada");
  const body = document.body;
  if(isLightOn){
    lamp.classList.add("acesa");
    body.style.background = "#f5e6a0";
    body.style.color = "#222";
  } else {
    lamp.classList.remove("acesa");
    if(isDay){
      body.style.background = "#87CEEB";
      body.style.color = "#222";
    } else {
      body.style.background = "#0f0f1a";
      body.style.color = "white";
    }
  }
}
function trocarDiaNoite(){
  isDay = !isDay;
  atualizarTela();
}
atualizarTela();
