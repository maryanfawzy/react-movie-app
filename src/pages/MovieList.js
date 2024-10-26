import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import UseFetch from '../hooks/UseFetch'



const MovieList = ({apiPath}) => {
  
  const {data : movies} = UseFetch(apiPath)
 

  return (
    <main >
    <section className='max-w-7xl mx-auto p-7'>
     <div className='flex justify-center flex-wrap'>
      {movies.map((movie) => (
              <Card key= {movie.id} movie={movie}/>

      ))}







</div>
    </section>
    </main>
        
         
            

        
    
  )
}

export default MovieList
