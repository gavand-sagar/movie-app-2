import { Rating } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function MovieDetails() {

    let [movie,setMovie] = useState(null);

    let {id} = useParams()

    useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/movie/' + id;
        fetch(url,{
          method: 'GET',
          headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6wWg8vfXcNCyX7GebqtFEAo_0iHk31Eqf5pWaT8sJ0'}
        })
        .then(x=>x.json())
        .then(response=>{
            setMovie(response)
        })
    },[])

    function getImage() {
        return 'https://image.tmdb.org/t/p/original' + movie.poster_path
    }

    function getFormattedDate() {
        return moment(new Date(movie.release_date)).format("MMM DD, YYYY")
    }

    function getGenres(){
        if(movie?.genres && movie?.genres?.length > 0){
            return movie.genres.map(x=>x.name).join(", ")
        }
    }

    function getRuntime(){
        let hours =  parseInt(movie.runtime / 60);
        let minutes = parseInt(movie.runtime % 60);
        if(!hours){
            return minutes + 'm'
        }
        return hours + 'h ' + minutes + 'm'
    }


    return (
        movie &&    
        <div className='movie-details'>
            <div className='left'>
                <img src={getImage()}/>
            </div>
            <div className='right'>
                <h1>{movie.title}</h1>
                <p>({movie.tagline})</p>
                <br/>
                <br/>
                <h3>{getGenres()}</h3>
                <p>Release Date: {getFormattedDate()}</p>
                <p>{getRuntime()}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <Rating readOnly precision={0.5} name="customized-10" value={movie.vote_average} defaultValue={2} max={10} /> 
                <br/>
                <p>{movie.vote_average}</p>
            </div>
        </div>
    )
}
