
import  {Route, Routes} from "react-router-dom"
import  MovieList  from "../pages/MovieList.js"
import  Search  from "../pages/Search.js"
import MovieDetail  from "../pages/MovieDetail.js"
import  PageNotFound from "../pages/PageNotFound.js"

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<MovieList apiPath='movie/list'/>}/>
        <Route path="/movie/:id" element ={<MovieDetail/>}/>
        <Route path="/movies/popular" element={<MovieList apiPath = 'tv/popular'/>}/>
        <Route path="/movies/top" element = {<MovieList apiPath = 'tv/top_rated'/>} />
        <Route path="/movies/upcomming" element = {<MovieList apiPath = 'movie/upcoming'/>}/>
        <Route path="*" element = {<PageNotFound/>}/>

        <Route path="/search" element ={<Search apiPath = 'search/movie'/>} />

        
</Routes>

    </div>
  )
}

export default AllRoutes



