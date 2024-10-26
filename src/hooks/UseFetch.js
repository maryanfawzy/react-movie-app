import React, { useState, useEffect } from 'react'

const UseFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=0e390991a9cde474bc4ea22525c9280a`

    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url)
          const json = await response.json();
          setData(json.results) 
        }
        fetchMovies()
      },[url])
  return {
    data
  }
}

export default UseFetch
