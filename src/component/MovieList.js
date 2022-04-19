import React, { useEffect } from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movieName, titleSearch, ratingSearch }) 
{

    const search = () => {
        return movieName.filter((film) =>
        {
          return ratingSearch === 0 ? 
            film.title.toLowerCase().includes(titleSearch.toLowerCase()):
             Number(film.rating) === ratingSearch &&
                film.title.toLowerCase().includes(titleSearch.toLowerCase());
        })
    }
   
   /* useEffect(()=>search()===[]?document.write(<p>not found</p>):null);*/
   

  return (
    <div style={{display: "flex", flexDirection: "row",justifyContent: "space-around",flexWrap: "wrap",backgroundColor:"black"}} >
      {search().map((movie, id) => (
        <MovieCard movie={movie} key={id} />
        ))
      }
    </div>
  );
}
