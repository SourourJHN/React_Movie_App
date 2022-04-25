import React, {useEffect, useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import MovieData from './MovieData';


function Home() {
  const [movieName, setMovieName] = useState(MovieData);
  const [titleSearch, setTitleSearch] = useState('');
  const [ratingSearch,setRatingSearch] = useState(0);

  //******** */
    function display()
    {
      setMovieName(MovieData);
    }
    
    useEffect(()=>{
      display();
    },[]);
  //******* */
  
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

export default Home;
