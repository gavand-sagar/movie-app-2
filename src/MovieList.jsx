import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

export default function MovieList() {
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie',{
          method: 'GET',
          headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6wWg8vfXcNCyX7GebqtFEAo_0iHk31Eqf5pWaT8sJ0'}
        })
        .then(x=>x.json())
        .then(response=>{
          setMovies(response.results)
        })
    },[])
  
    return (
      <div className="App">
        {
          movies.map(movie => <MovieCard movieData={movie}/>)
        }
        
      </div>
    );
}
