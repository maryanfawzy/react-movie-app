import React, { useState, useEffect } from 'react'

const UseFetch = (apiPath,queryTerm) => {
    const [data, setData] = useState([]);  // Initialize with empty array
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchMovies() {
        try {
          const url = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=0e390991a9cde474bc4ea22525c9280a&query=${queryTerm}`;
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results || []);  // Use empty array as fallback
          setLoading(false);
        } catch (error) {
          console.error(error);
          setData([]);  // Set empty array on error
          setLoading(false);
        }
      }
      fetchMovies();
    }, [apiPath]);
  
    return { data, loading };
  };
export default UseFetch;