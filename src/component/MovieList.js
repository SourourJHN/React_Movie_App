import React, { useEffect } from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movieName, titleSearch, ratingSearch }) 
{
    const search = movieName.filter((film)=> 
       {
              if (titleSearch==="" && ratingSearch===0)
               {
                 return film;
                }
              else if (titleSearch)
                {
                  return film.title.toLowerCase().includes(titleSearch);
                }
              else if(ratingSearch)
              {
                   return film.rating===ratingSearch;
              }
        });
    
  

  return (
    <div style={{display: "flex",
                 flexDirection: "row",
                 justifyContent: "space-around",
                 flexWrap: "wrap",
                 backgroundColor:"black"}} 
    >

      {search.length>0 && 
         search.map((movie, id) => (
        <MovieCard movie={movie} key={id} />
        ))
      }
      {
        search.length===0 && <h2>No movies found</h2>
      }
    </div>
  );
}
