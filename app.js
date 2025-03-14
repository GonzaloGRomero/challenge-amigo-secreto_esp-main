// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let listaAmigosSorteados = [];
function listarAmigos(){
    // Selecciona el contenedor principal donde se mostrarán los amigos.
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia el contenido actual del contenedor.

    // Itera sobre el arreglo listaAmigos y crea elementos <li> para cada amigo.
    let currentUl = document.createElement('ul');
    listaAmigos.appendChild(currentUl);
    for (let i = 0; i < listaAmigos.length; i++) {
        
        let li = document.createElement('li'); // Crea un nuevo elemento <li>.
        li.textContent = `${i + 1}: ${listaAmigos[i]}`; // Asigna el texto al elemento <li>.
        currentUl.appendChild(li); // Agrega el elemento <li> al elemento <ul> actual.
    }

    // Muestra el total de amigos.
    let totalAmigos = document.createElement('p');
    totalAmigos.textContent = `Total de amigos: ${listaAmigos.length}`;
    container.appendChild(totalAmigos);
}
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    let numero = 0;
    if(nombre === ''){
        asignarTextoElemento('listaAmigos','Ingresa un nombre valido por favor  <br>' + listaAmigos + '<br>Total de amigos: ' + listaAmigos.length);
    } else {
        listaAmigos.push(nombre);
        //numero ++;
        //asignarTextoElemento('listaAmigos', listaAmigos + '<br>Total de amigos: ' + listaAmigos.length);
        listarAmigos();
    }

}



function asignarTextoElemento(id, texto) {
    let idElementoHTML = document.getElementById(id); // Selecciona el elemento HTML basado en el selector proporcionado.
    idElementoHTML.innerHTML = texto; // Asigna el texto proporcionado al contenido HTML del elemento.
    return; // Finaliza la función.
}
function sortearAmigo(){
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    if(listaAmigos.length === 0){
        asignarTextoElemento('resultado','No hay amigos en la lista');
        return;
    }
    if(listaAmigos.length %2 !== 0){
        asignarTextoElemento('resultado','No se puede sortear, la cantidad de amigos debe ser par');
        return;
    }
    if(listaAmigosSorteados.includes(amigoSorteado) )
        return sortearAmigo();
    else{
    listaAmigosSorteados.push(amigoSorteado);
    asignarTextoElemento('resultado','El amigo Secreto de xx es: ' + amigoSorteado);
    }
}