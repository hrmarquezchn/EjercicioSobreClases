class Pelicula{
    //Atributo
    titulo
    director
    anioLanzamiento
    
    
        constructor(titulo, director, anioLanzamiento) {
            this.titulo = titulo;
            this.director = director;
            this.anioLanzamiento = anioLanzamiento;
        }
    }
    
    // Creamos una colección de películas (simulando una base de datos)
    const peliculas = [];
    
    // Método GET: Obtener todas las películas
    obtenerPeliculas() {
        return peliculas;
    }
    
    // Método POST: Agregar una nueva película
    agregarPelicula(titulo, director, anioLanzamiento) {
        const nuevaPelicula = new Pelicula(titulo, director, anioLanzamiento);
        peliculas.push(nuevaPelicula);
        return nuevaPelicula;
    }
    
    // Método PUT: Actualizar una película existente
    actualizarPelicula(id, titulo, director, anioLanzamiento) {
        const peliculaExistente = peliculas.find(p => p.id === id);
        if (!peliculaExistente) {
            return null; // Película no encontrada
        }
        peliculaExistente.titulo = titulo;
        peliculaExistente.director = director;
        peliculaExistente.anioLanzamiento = anioLanzamiento;
        return peliculaExistente;
    }

module.exports = Pelicula