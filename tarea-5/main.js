
const librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: ${titulo}`);
}

// funcion para mostrar los libros que se han leído
function mostrarLibrosLeidos() {
    console.log("Libros que has leído:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(`- ${librosLeidos[i]}`);
    }
}


agregarLibro("El Principito");
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");

mostrarLibrosLeidos();
