const isDay = false;
const isLightOn = isDay;
let batteryLevel = 100;
let isWorking = isLightOn === true && batteryLevel > 0;
console.log(isDay, isLightOn, batteryLevel, isWorking);
let ligada = isLightOn;
let timer = null;
const lamp = document.getElementById("lamp");
const body = document.body;
const statusDia = document.getElementById("status-dia");
const statusLuz = document.getElementById("status-luz");
const statusBateria = document.getElementById("status-bateria");
const statusFinal = document.getElementById("status-final");
const nivel = document.getElementById("nivel");
function atualizar(){
  statusDia.textContent = isDay ? "Período: Dia" : "Período: Noite";
  statusBateria.textContent = batteryLevel + "%";
  nivel.style.width = batteryLevel + "%";
  if(batteryLevel < 20) nivel.style.background = "red";
  else nivel.style.background = "#00c853";
  if(ligada && batteryLevel > 0){
    lamp.classList.add("on");
    body.classList.add("on");
    statusLuz.textContent = "Luz: Ligada";
    statusFinal.textContent = "Sistema operacional";
  } else {
    lamp.classList.remove("on");
    body.classList.remove("on");
    statusLuz.textContent = "Luz: Desligada";
    statusFinal.textContent = batteryLevel <= 0 ? "Bateria acabou!" : "Sistema inoperante";
  }
}
document.getElementById("btn-luz").onclick = () => {
  if(batteryLevel <= 0 && !ligada) return;
  ligada = !ligada;
  if(ligada){
    timer = setInterval(()=>{
      if(batteryLevel > 0){ batteryLevel--; atualizar(); }
      else { clearInterval(timer); ligada=false; atualizar(); }
    }, 1000);
  } else { clearInterval(timer); }
  atualizar();
};
atualizar();