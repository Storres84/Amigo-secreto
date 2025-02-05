// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let amigo = capitalizaString(document.getElementById('amigo').value);
    if (amigo == '') {
        alert('Inserte un nombre por favor');
    } else if (amigos.includes(amigo)) {
        alert('Este amigo ya esta en la lista')
        limpiarImput();
    } else {
        amigos.push(amigo);
        limpiarImput();
        asignarTextoLi(amigo, 'listaAmigos');
    }
}
function capitalizaString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function asignarTextoLi(elemento, list) {
    const lista = document.getElementById(list);
    let li = document.createElement("li"); // Crear un <li>
    li.textContent = elemento; // Asignar contenido
    lista.appendChild(li);
}
function limpiarImput() {
    document.querySelector('input').value = '';
}
function sortearAmigo() {
    let ganador = amigos[Math.round(Math.random() * amigos.length)];
    document.getElementById('listaAmigos').replaceChildren();
    asignarTextoLi(`El amigo sorteado es ${ganador}`, 'resultado');
    document.getElementById('sorteo').disabled = true;
}
