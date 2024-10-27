import { useSearchParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import Card from '../components/Card'
import UseFetch from '../hooks/UseFetch'

const Search = (apiPath) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")
  const { data: movies, loading, movie } = UseFetch(apiPath,queryTerm);
  useEffect(()=>{
    document.title= `Search Result For ${queryTerm} `
  })
  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length===0 ? `no result found for ${queryTerm}` :`Result for ${queryTerm}`}

        </p>
      </section>
      <section className='max-w-7xl mx-auto p-7'>
        <div className='flex justify-center flex-wrap'>
          {movies && movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Search
