import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import MovieData from './component/MovieData';
import MovieList from './component/MovieList';


function App() {
  const [movieName, setMovieName] = useState(MovieData);
  const [titleSearch, setTitleSearch] = useState('');
  const [ratingSearch,setRatingSearch] = useState(0);

  
  return (
    <div className="App">
      
      <NavBar 
         titleSearch={titleSearch}
         ratingSearch ={ratingSearch} 
         movieName={movieName} 
         setMovieName={setMovieName} 
         setTitleSearch={setTitleSearch} 
         setRatingSearch={setRatingSearch}
       />

       <MovieList 
         movieName={movieName}
         titleSearch={titleSearch}
         ratingSearch={ratingSearch}
       />

    </div>
  );
}

export default App;
