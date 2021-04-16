'use strict'
//VARIABLES
let hrs = 0;
let min = 0;
let sec = 0;
let segundosTotales = 0;
let segundosDormido = 0;
let detenido = false;

let pomodoro;
let crono;

let botonStart;
let botonStop;

let intervalos = 1500000;
let tiempoDescanso = 300;

//VARIABLES-SELECTORES
const textoSegundos = document.querySelector('.segundos .numeros h2');
const textoMinutos = document.querySelector('.minutos .numeros h2');
const textoHoras = document.querySelector('.horas .numeros h2');

const botones = document.querySelector('.contenedor-botones');


cargarEventListeners();
//FUNCIONES
function cargarEventListeners() {
    botones.addEventListener('click', timer);
}

function timer(e) {

    if (e.target.classList.contains('boton-start')) {
        botonStart = e.target;
        botonStart.style.cssText = 'pointer-events:none;text-decoration: line-through;';




        if (botonStop != null) {
            botonStop.style.cssText = 'pointer-events:auto;text-decoration: none;';
        }

        cronometro();

        function cronometro() {
            crono = setInterval(() => {

                if (segundosTotales == tiempoDescanso) {
                    segundosTotales = 0;
                    detenido = true;

                    pomodoro = setTimeout(() => {
                        cronometro();
                        detenido = false;
                    }, tiempoDescanso);
                } else {
                    segundosTotales += 1;
                }



                if (detenido == true) {
                    clearInterval(crono);
                    detenido = false;

                } else {
                    sec += 1;
                }





                if (sec == 60) {
                    sec = 0;

                    min += 1;

                    if (min == 60) {
                        min = 0;

                        hrs += 1;

                        if (hrs == 60) {
                            hrs = 0;
                        }

                        if (hrs < 10) {
                            textoHoras.textContent = `0${hrs}`
                        } else {
                            textoHoras.textContent = hrs;
                        }
                    }

                    if (min < 10) {
                        textoMinutos.textContent = `0${min}`
                    } else {
                        textoMinutos.textContent = min;
                    }


                }


                if (sec < 10) {
                    textoSegundos.textContent = `0${sec}`;
                } else {
                    textoSegundos.textContent = sec;
                }



            }, 1000);
        }




    }

    if (e.target.classList.contains('boton-stop')) {

        botonStop = e.target;
        botonStop.style.cssText = 'pointer-events:none;text-decoration: line-through;';

        if (botonStart != null) {
            botonStart.style.cssText = 'pointer-events:auto;text-decoration: none;';
        }
        detenido = true;


    }

    if (e.target.classList.contains('boton-reset')) {

        detenido = true;
        if (botonStart != null) {
            botonStart.style.cssText = 'pointer-events:auto;text-decoration: none;';
        }
        if (botonStop != null) {
            botonStop.style.cssText = 'pointer-events:none;text-decoration: line-through;';

        }
        sec = 0;
        textoSegundos.textContent = `0${sec}`;
        min = 0;
        textoMinutos.textContent = `0${min}`;
        hrs = 0;
        textoHoras.textContent = `0${hrs}`;
    }


}