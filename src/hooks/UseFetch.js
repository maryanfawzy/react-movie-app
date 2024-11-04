import React, { useState, useEffect } from 'react'

const UseFetch = (apiPath,queryTerm) => {
  const [data, setData] = useState([]);  // Initialize with empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const url = queryTerm
          ? `https://api.themoviedb.org/3/${apiPath}?api_key=0e390991a9cde474bc4ea22525c9280a&query=${queryTerm}`
          : `https://api.themoviedb.org/3/movie/${apiPath}?api_key=0e390991a9cde474bc4ea22525c9280a`;
        
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setData([]);
        setLoading(false);
      }
    }
    fetchMovies();
  }, [apiPath, queryTerm]); 

  return { data, loading };
};
export default UseFetch;