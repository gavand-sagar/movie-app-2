import moment from 'moment/moment'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({ movieData }) {

    function getImage() {
        return 'https://image.tmdb.org/t/p/original' + movieData.poster_path
    }

    function getFormattedDate() {
        return moment(new Date(movieData.release_date)).format("MMM DD, YYYY")
    }

    return (
        <div className='movie-card'>
            <Link to={'/movie/' + movieData.id }><img src={getImage()} /></Link>
            <h3>{movieData.title}</h3>
            <p>{getFormattedDate()}</p>
        </div>
    )
}
