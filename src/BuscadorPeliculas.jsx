import { useState } from "react";

export const BuscadorPeliculas = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '83377098217c907f5d13bf7dac344be9'
    const [busqueda, setBusqueda] = useState('')

    const [peliculas, setPeliculas] = useState([])

    const InputChange = (e) => {
        setBusqueda(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try {
            const reponse = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            const data =  await reponse.json()
            setPeliculas(data.results)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className="container">
      <h1 className="title">Buscador de Peliculas</h1>
      <form onSubmit={onSubmit}>
        <input 
        type="text" 
        name="" 
        id="" 
        value={busqueda}
        onChange={InputChange}
        />

        <button type="submit" className="search-button">Buscar</button>
      </form>

      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
          </div>

        ))}

      </div>
    </div>
  );
};
