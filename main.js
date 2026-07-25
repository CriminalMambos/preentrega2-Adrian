// ==========================================
// Simulador: Gestión de Destinos de Viaje
// ==========================================

// 1. Preparación de la Colección
// Creamos un array con 5 elementos iniciales
let destinosViaje = ["Cancún", "Madrid", "Miami", "Roma", "Tokio"];
console.log("Destinos iniciales en el sistema:", destinosViaje);

// 2. Manipulación Dinámica
// Agregamos un destino al final
destinosViaje.push("Londres");
// Agregamos un destino prioritario al principio
destinosViaje.unshift("Bali");

// Eliminamos el último elemento de la lista y lo guardamos en una variable
let destinoEliminado = destinosViaje.pop();
console.log(`Se ha eliminado el elemento: ${destinoEliminado}`);
alert(`Aviso del sistema: Se ha eliminado el elemento: ${destinoEliminado}`);

// 3. Búsqueda y Validación
// Solicitamos al usuario que busque un destino
let destinoBuscado = prompt("¿Qué destino de viaje deseas buscar en nuestro sistema?");

// Verificamos que el usuario haya escrito algo
if (destinoBuscado !== null && destinoBuscado.trim() !== "") {
    // Usamos includes() para verificar existencia
    if (destinosViaje.includes(destinoBuscado)) {
        // Usamos indexOf() para encontrar su posición exacta
        let indice = destinosViaje.indexOf(destinoBuscado);
        console.log(`Búsqueda exitosa: El destino '${destinoBuscado}' se encuentra en el índice ${indice}.`);
        alert(`¡Excelente! El destino '${destinoBuscado}' está disponible.`);
    } else {
        console.log(`Fallo en búsqueda: El destino '${destinoBuscado}' no está en la lista.`);
        alert(`Lo sentimos, no contamos con el destino '${destinoBuscado}' por el momento.`);
    }
}

// 4. Actualización por Índice
// Modificamos un destino específico usando splice()
// Sintaxis: splice(índice_a_modificar, cantidad_a_eliminar, nuevo_elemento)
// Vamos a cambiar "Miami" (que quedó en el índice 3 tras el unshift) por "París"
destinosViaje.splice(3, 1, "París");
console.log("Se actualizó un destino mediante splice. 'Miami' fue reemplazado por 'París'.");

// 5. Reporte Iterativo
// Función que recorre el array mostrando los resultados
function mostrarDestinosDisponibles(lista) {
    console.log("--- Catálogo Actualizado de Destinos ---");
    // Uso del bucle for...of para una iteración limpia
    for (let destino of lista) {
        console.log(`✈️ Destino disponible: ${destino}`);
    }
}

// Ejecutamos la función pasándole nuestro array modificado
mostrarDestinosDisponibles(destinosViaje);