// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function listarAmigos(){
    
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    let numero = 0;
    if(nombre === ''){
        asignarTextoElemento('ul','Ingresa un nombre valido por favor  <br>' + listaAmigos + '<br>Total de amigos: ' + listaAmigos.length);
    } else {
        listaAmigos.push(nombre);
        numero ++;
        asignarTextoElemento('ul', listaAmigos + '<br>Total de amigos: ' + listaAmigos.length);
    }

}



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Selecciona el elemento HTML basado en el selector proporcionado.
    elementoHTML.innerHTML = texto; // Asigna el texto proporcionado al contenido HTML del elemento.
    return; // Finaliza la función.
}