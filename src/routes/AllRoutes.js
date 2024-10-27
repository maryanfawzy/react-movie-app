
import  {Route, Routes} from "react-router-dom"
import  MovieList  from "../pages/MovieList.js"
import  Search  from "../pages/Search.js"
import MovieDetail  from "../pages/MovieDetail.js"
import  PageNotFound from "../pages/PageNotFound.js"

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<MovieList apiPath="now_playing" title='Home'/>}/>
        <Route path="/movie/:id" element ={<MovieDetail/>}/>
        <Route path="/movies/popular" element={<MovieList apiPath = 'popular' title='Popular'/>}/>
        <Route path="/movies/top" element = {<MovieList apiPath = 'top_rated' title='Top Rated'/>} />
        <Route path="/movies/upcomming" element = {<MovieList apiPath = 'upcoming' title='Up Comming'/>}/>
        <Route path="*" element = {<PageNotFound title='P age Not Found'/>}/>

        <Route path="/search" element ={<Search apiPath = 'search/movie'/>} />

        
</Routes>

    </div>
  )
}

export default AllRoutes



