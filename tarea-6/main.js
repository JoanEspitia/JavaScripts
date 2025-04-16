// Definimos un objeto libro con sus propiedades y métodos
const libro = {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],

    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        console.log(`Capítulo agregado: ${nombreCapitulo}`);
    },

    eliminarCapitulo: function(nombreCapitulo) {
        const indice = this.capitulos.indexOf(nombreCapitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo eliminado: ${nombreCapitulo}`);
        } else {
            console.log(`No se encontró el capítulo: ${nombreCapitulo}`);
        }
    },

    mostrarCapitulos: function() {
        console.log("Capítulos del libro:");
        this.capitulos.forEach((cap, i) => {
            console.log(`${i + 1}. ${cap}`);
        });
    }
};

// Probamos el objeto
libro.describirLibro();
libro.mostrarCapitulos();
libro.agregarCapitulo("Capítulo 4");
libro.eliminarCapitulo("Capítulo 2");
libro.mostrarCapitulos();
