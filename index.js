const Pelicula = require("./Model/Pelicula");

const pelicula1 = new Pelicula(1, "El Padrino", "Francis Ford Coppola", "Drama", 1972);
const pelicula2 = new Pelicula(2, "Pulp Fiction", "Quentin Tarantino", "Crimen", 1994);
const pelicula3 = new Pelicula(3, "star trek", "turu tururu", "fixion", 1994);
console.log(Pelicula)

// Obtener película por ID
const peliculaObtenida = obtenerPeliculaPorId(1);
console.log(peliculaObtenida); // Imprime la película obtenida

// Actualizar película
const peliculaActualizada = new Pelicula(1, "El Padrino: Edición remasterizada", "Francis Ford Coppola", "Drama", 1972);
actualizarPelicula(peliculaActualizada);

// Eliminar película por ID
eliminarPeliculaPorId(2);
