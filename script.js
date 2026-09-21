let isDay = false;
let isLightOn = !isDay;
const batteryLevel = 5;

function atualizarTela() {
  const isWorking = isLightOn === true && batteryLevel > 0;
  
  document.getElementById("status-dia").textContent = isDay ? "Período: Dia" : "Período: Noite";
  document.getElementById("status-luz").textContent = isLightOn ? "Luz: Ligada" : "Luz: Desligada";
  document.getElementById("status-final").textContent = isWorking ? "Sistema operacional" : "Sistema inoperante";
  
  // muda a cor do fundo
  document.body.style.background = isLightOn ? "#444" : "#111";
}

function alternarLuz() {
  isLightOn = !isLightOn;
  atualizarTela();
  console.log("Clicou! Luz agora:", isLightOn);
}

// chama uma vez quando carrega a página
atualizarTela();
console.log("Dia?", isDay);
console.log("Luz acesa?", isLightOn);
console.log("Bateria", batteryLevel + "%");
