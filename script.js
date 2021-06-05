"use strict";

/* GUARDAR EN VARIABLES LOS ELEMENTOS DE LA PÁGINA PARA PODER INTERACTUAR CON ELLOS */

const contador = document.querySelector("div");

const boton = document.querySelector("body > button");

const texto = document.querySelector("textarea");

const modo = document.querySelector("header > button");

const html = document.querySelector("html");

/* MIRAMOS SI TENEMOS EL MODO GUARDADO EN EL NAVEGADOR */
let modoUsuario = window.localStorage.getItem("modo");
/* SI NO ESTÁ GUARDADO MIRAMOS LA CONFIGURACIÓN DEL NAVEGADOR */
if (!modoUsuario) {
  const modoNoche = window.matchMedia("(prefers-color-scheme: dark)").matches;
  /* PONER EL MODO COMO EN EL NAVEGADOR */
  if (modoNoche) {
    modoUsuario = "noche";
  } else {
    modoUsuario = "dia";
  }
  /* GUARDAMOS EL MODO PARA FUTURAS VISITAS */
  window.localStorage.setItem("modo", modoUsuario);
}

/* MODIFICAR LA CLASE DEL HTML PARA CAMBIAR EL MODO */
if (modoUsuario === "noche") {
  html.classList.add("noche");
} else if (modoUsuario === "dia") {
  html.classList.remove("noche");
}

/* FUNCIÓN PARA BORRAR TODO EL TEXTO */
function borrar() {
  /* CAMBIAR EL TEXTO POR NADA Y ACTUALIZAR CONTADOR */
  texto.value = "";
  actualizarContador();
}

/* LE AÑADIMOS LA FUNCIÓN DE BORRAR AL BOTÓN */
boton.addEventListener("click", borrar);

/* FUNCIÓN DE ACTUALIZAR CONTADOR */
function actualizarContador() {
  /* LIMPIAMOS EL TEXTO CAMBIANDO SIGNOS DE PUNTUACIÓN POR ESPACIOS Y DESPUÉS CAMBIAMOS LOS ESPACIOS SOBRANTES EN UNO SOLO*/
  let cleanText = texto.value
    .replace(/[.,\/#!?¡¿$%\^&\*;:{}=\-_`~()]/g, " ")
    .replace(/\s{2,}/g, " ");
  /* DIVIDIR LA CADENA DE TEXTO POR LOS ESPACIOS Y CONTAMOS CUANTAS PALABRAS HAY */
  contador.textContent = cleanText.split(" ").length;
  /* NOS ASEGURMOS QUE SI ESTÁ A 0 PONGA 0 */
  if (texto.value.length === 0) {
    contador.textContent = 0;
  }
}

/* AÑADIMOS LA FUNCIÓN AL TEXT AREA */
texto.addEventListener("input", actualizarContador);

/* FUNCIÓN PARA CAMBIAR EL MODO */
function cambiarModo() {
  /* PONER O QUITAR LA CLASE */
  html.classList.toggle("noche");
  /* CAMBIAMOS EL MODO DE USUARIO */
  if (modoUsuario === "noche") {
    modoUsuario = "dia";
  } else {
    modoUsuario = "noche";
  }
  /* LO GUARDAMOS PARA FUTURAS VISITAS */
  window.localStorage.setItem("modo", modoUsuario);
}

/* AÑADIMOS LA FUNCIÓN AL BOTÓN DE CAMBIAR MODO */
modo.addEventListener("click", cambiarModo);
