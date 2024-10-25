import AllRoutes from './routes/AllRoutes';
import './App.css';
import {Header}  from './components/Header';
import  MovieList from './pages/MovieList';
import {Footer} from './components/Footer'




function App() {
  return (
    <div className="App">
      
    <AllRoutes/>
    <Header/>
    <Footer/>
    
    
    
    </div>
  );
}


export default App;
