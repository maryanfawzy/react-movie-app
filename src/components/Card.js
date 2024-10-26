import React from 'react'
import { Link } from 'react-router-dom'
import backUp from '../assets/backup.png'

const Card = ({movie}) => {
    const {id, original_title,overview, poster_path}= movie;
    const image =poster_path ?`https://image.tmdb.org/t/p/w500/${poster_path}` : backUp
  return (
    <div class=" max-w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <Link to={`/movie/${id}`}>
        <img class="rounded-t-lg" src={image} alt="" />
    </Link>
    <div class="p-5">
        <Link to="#">
            <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-7 font-normal  text-gray-700 dark:text-gray-400">{overview}</p>
       
    </div>
</div>
  )
}

export default Card
