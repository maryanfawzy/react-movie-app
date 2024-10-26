import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import UseFetch from '../hooks/UseFetch'



function MovieList({ apiPath }) {
  const { data: movies, loading } = UseFetch(apiPath);

  if (loading) {
    return (
      <main>
        <section className='max-w-7xl mx-auto p-7'>
          <div className='flex justify-center'>
            <p>Loading...</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className='max-w-7xl mx-auto p-7'>
        <div className='flex justify-center flex-wrap'>
          {movies && movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}


export default MovieList
