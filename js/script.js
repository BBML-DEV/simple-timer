function getTimeSeconds(seconds) {
   const data = new Date(seconds * 1000);
   return data.toLocaleTimeString('pt-BR', {
       hour12: false, 
       timeZone: 'GMT'
   });
}

console.log(getTimeSeconds(10));

//selecionando as classes necessárias
const clock = document.querySelector("#relogio");
const start = document.querySelector("#iniciar");
const pause = document.querySelector("#pausar");
const restart = document.querySelector("#zerar");
const icon = document.querySelector("#icon")
let seconds = 0;
let timer;

function clockStart(){
     timer = setInterval(function () {
        seconds++;
        clock.innerHTML = getTimeSeconds(seconds);
    }, 1000);
}

start.addEventListener("click", function (evento) {
    clearInterval(timer);
    clockStart();
    icon.classList.add("relogio-funcionando");
    clock.classList.add("relogio-funcionando");
});


pause.addEventListener("click", function (evento) {
    clock.classList.remove("relogio-funcionando")
    icon.classList.remove("relogio-funcionando");
    clearInterval(timer);
    icon.classList.add("relogio-pausado");
    clock.classList.add("relogio-pausado")
});

restart.addEventListener("click", function (evento) {
    clock.classList.remove("relogio-funcionando")
    icon.classList.remove("relogio-funcionando");
    clock.classList.remove("relogio-pausado")
    icon.classList.remove("relogio-pausado");
    clearInterval(timer);
    clock.innerHTML = '00:00:00'
    seconds = 0;
});