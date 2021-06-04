"use strict";

console.log("Hello World");
const contador = document.querySelector("div");
console.log(contador);
const boton = document.querySelector("button");
console.log(boton);
const texto = document.querySelector("textarea");
console.log(texto);
console.log(texto.textContent);

function borrar() {
  texto.value = "";
  actualizarContador();
}

boton.addEventListener("click", borrar);

console.log(texto.textContent.length);

function actualizarContador() {
  contador.textContent = texto.value.split(" ").length;
  if (texto.value.length === 0) {
    contador.textContent = 0;
  }
}

texto.addEventListener("input", actualizarContador);
