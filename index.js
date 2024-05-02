const Pelicula = require("./Model/Pelicula");

agregarPelicula('El Padrino', 'Francis Ford Coppola', 1972);
agregarPelicula('Pulp Fiction', 'Quentin Tarantino', 1994);

console.log(obtenerPeliculas());
// Actualizamos la película con ID 1
actualizarPelicula(1, 'El Padrino II', 'Francis Ford Coppola', 1974);
console.log(obtenerPeliculas());

// Eliminamos la película con ID 2
eliminarPelicula(2);
console.log(obtenerPeliculas());
