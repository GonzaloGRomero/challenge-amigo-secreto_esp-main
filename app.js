// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let grupoAmigos = [];
let listaAmigosSorteados = [];

function listarAmigos(){
    // Selecciona el contenedor principal donde se mostrarán los amigos.
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia el contenido actual del contenedor.

    // Itera sobre el arreglo listaAmigos y crea elementos <li> para cada amigo.
    let amigos = document.createElement('ul');
    listaAmigos.appendChild(amigos);
    for (let i = 0; i < grupoAmigos.length; i++) {
        
        let li = document.createElement('li'); // Crea un nuevo elemento <li>.
        li.textContent = `${i + 1}: ${grupoAmigos[i]}`; // Asigna el texto al elemento <li>.
        amigos.appendChild(li); // Agrega el elemento <li> al elemento <ul> actual.
    }

    // Muestra el total de amigos.
    let totalAmigos = document.createElement('p');
    totalAmigos.textContent = `Total de amigos: ${grupoAmigos.length}`;
    listaAmigos.appendChild(totalAmigos);
}
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
   
    if(nombre === ''){
        alert("Por favor ingresar un nombre valido.");         
    } else {
        grupoAmigos.push(nombre);
        listarAmigos();
        amigo.value = '';
    }

}
function asignarTextoElemento(id, texto) {
    let idElementoHTML = document.getElementById(id); // Selecciona el elemento HTML basado en el selector proporcionado.
    idElementoHTML.innerHTML = texto; // Asigna el texto proporcionado al contenido HTML del elemento.
    return; // Finaliza la función.
}
function sortearAmigo(){
    let amigoSorteado = grupoAmigos[Math.floor(Math.random() * grupoAmigos.length)];
    if(grupoAmigos.length === 0){
        alert("Por favor ingresar al menos un nombre.");
        
        return;
    }
   
    
    else{
    listaAmigosSorteados.push(amigoSorteado);
    grupoAmigos=[];
    asignarTextoElemento('resultado','El amigo Secreto sorteado es: ' + amigoSorteado);
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''
    }
}