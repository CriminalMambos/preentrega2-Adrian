// --- Pre-Entrega 2: Lógica de Programación y Control de Flujo ---
// Simulador: Juego de adivinanza de números

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentoUsuario = "";
let contadorIntentos = 0;

while (intentoUsuario !== "ESC") {
  intentoUsuario = prompt("Adivina el número secreto (1-10) o escribe ESC para salir:");

  if (intentoUsuario === "ESC") {
    alert("Juego terminado. ¡Gracias por participar!");
    break;
  }

  const numeroIngresado = parseInt(intentoUsuario);
  contadorIntentos++;

  if (numeroIngresado === numeroSecreto) {
    alert(`¡Felicitaciones! Adivinaste el número secreto (${numeroSecreto}) en ${contadorIntentos} intentos.`);
    console.log("Juego finalizado con éxito.");
    break;
  } else if (numeroIngresado > numeroSecreto) {
    alert("El número secreto es más pequeño. Intenta de nuevo.");
  } else if (numeroIngresado < numeroSecreto) {
    alert("El número secreto es más grande. Intenta de nuevo.");
  } else {
    alert("Entrada inválida. Por favor ingresa un número entre 1 y 10.");
  }
}
