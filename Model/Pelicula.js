class Pelicula{
    id
    titulo
    director
    genero
    anio
    
    
    constructor(id, titulo, director, genero, anio) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.genero = genero;
        this.anio = anio;
      }
    }
// Colección de películas
const peliculas = [];

// Agregar película
agregarPelicula(pelicula) {
  if (!pelicula instanceof Pelicula) {
    throw new Error("El elemento no es una instancia de la clase Pelicula");
  }

  peliculas.push(pelicula);
  console.log();
}

// Obtener película por ID
obtenerPeliculaPorId(id) {
  return peliculas.find(pelicula => pelicula.id === id);
}

// Actualizar película
actualizarPelicula(peliculaActualizada) {
  const indicePelicula = peliculas.findIndex(pelicula => pelicula.id === peliculaActualizada.id);

  if (indicePelicula !== -1) {
    peliculas[indicePelicula] = peliculaActualizada;
    
  } else {
    console.error("Película no encontrada");
  }
}

// Eliminar película por ID
eliminarPeliculaPorId(id) {
  peliculas = peliculas.filter(pelicula => pelicula.id !== id);
 
}


module.exports = Pelicula