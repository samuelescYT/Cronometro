let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

document.querySelector(".texto").innerHTML = horas + " horas : " + minutos + " minutos : " + segundos + " segundos";

function iniciar() {
    document.querySelector(".container").style.transition = ".4s all";
    document.querySelector(".container").style.boxShadow = "0px 0px 10px #6dd1ff"
    intervalo = setInterval(() => {
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
        }

        if(minutos == 60) {
            minutos = 0;
            horas++;
        }


        document.querySelector(".texto").innerHTML = horas + " horas : " + minutos + " minutos : " + segundos + " segundos";
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    document.querySelector(".container").style.boxShadow = "0px 0px 10px #ff0"
    
}

function parar() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.querySelector(".texto").innerHTML = horas + " horas : " + minutos + " minutos : " + segundos + " segundos";
    document.querySelector(".container").style.boxShadow = "0px 0px 10px #f00"
    setTimeout(() => {
        document.querySelector(".container").style.boxShadow = "0px 0px 10px #fff";
    }, 500);
}