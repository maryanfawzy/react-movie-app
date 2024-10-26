import React from 'react'
import { json, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import backUp from '../assets/backup.png'
const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie]= useState([]);
  const image =movie.poster_path ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backUp
    useEffect(()=>{
      async function fetchMovie(){
        const response=await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0e390991a9cde474bc4ea22525c9280a`);
        const json= await response.json();
        setMovie(json);
      }
      fetchMovie()

    },[])
  

  return (
    <section className='flex justify-around flex-wrap py-5'>
      <div className='max-w-sm  '>
         <img className='rounded' src={image} alt="" />
      </div>
      <div className='max-w-2xl text-lg dark:text-white'>
        <h1 className='text-4xl bold my-3 text-center lg:text-left'>{movie.title} </h1>
        <p className=''>{movie.overview}
        </p>
        { movie.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
              { movie.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
              )) }
            </p>
            ) : "" }


          
          
    
      
        

      </div>
    </section>
  )
}

export default MovieDetail
