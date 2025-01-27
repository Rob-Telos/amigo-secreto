//Lista de amigos
let amigos = [];

//Funcion agregar amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  //Validacion de campo vacio y nombre repetido
  if (nombre && !amigos.includes(nombre)) {
    amigos.push(nombre);
    input.value = "";

    actualizarLista();
  } else {
    alert("Ingresa un nombre valido");
  }
}

//Función para actualizar la lista
function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

//Funcion para sortear lista de amigos
function sortearAmigo() {

  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  mostrarResultado(amigoSorteado);

  limpiarLista();
}

//Funcion para mostrar resultado
function mostrarResultado(amigoSorteado) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const mensaje = `El amigo secreto sorteado es: ${amigoSorteado}`;
  const li = document.createElement("li");
  li.textContent = mensaje;
  resultado.appendChild(li);
}

// Función para eliminar la lista de amigos
function limpiarLista() {
  amigos = [];
  actualizarLista();
}
