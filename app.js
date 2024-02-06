let numeroSecreto;
let intentos;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número secreto en ' + intentos + (intentos === 1 ? ' vez' : ' veces'));
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número Secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al ' + numeroMaximo);
    // Generar el numero aleatoreo
    numeroSecreto = generarNumeroSecreto();
    // Inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la Caja
    limpiarCaja();
    // Reiniciar las condiciones del juego
    condicionesIniciales();
    // Deshabilitar el botón de Nuevo Juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
}

function asignarTextoElemento(elemento, texto) {

    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    
    // Si ya sorteamos todos los numero
    if (listaNumeroSorteados.length == 10) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
        return;
    }

    // Si el numero generado esta incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

condicionesIniciales();



