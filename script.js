let isDay = false; 
let isLightOn = !isDay;
const batteryLevel = 5;
function atualizarTela() {
  isLightOn = !isDay;
  let isWorking = isLightOn && batteryLevel > 0;
  document.getElementById("status-dia").textContent = isDay ? "Período: Dia" : "Período: Noite";
  document.getElementById("status-luz").textContent = isLightOn ? "Luz: Ligada" : "Luz: Desligada";
  document.getElementById("status-final").textContent = isWorking ? "Sistema operacional" : "Sistema inoperante";
  const lamp = document.getElementById("lampada");
  if (isLightOn) {
    lamp.className = "acesa";
    document.body.style.background = "#fff3b0";
    document.body.style.color = "#222";
  } else {
    lamp.className = "apagada";
    if (isDay) {
      document.body.style.background = "#87CEEB";
      document.body.style.color = "#222";
    } else {
      document.body.style.background = "#0f0f1a";
      document.body.style.color = "white";
    }
  }
}
function trocarDiaNoite() {
  isDay = !isDay;
  atualizarTela();
}
atualizarTela();
