import React from 'react'
import { Link, useParams } from 'react-router-dom';
import MovieData from './MovieData';

export default function Description(props) {

  const params = useParams();
  let currentMovie = null;
  const movie = () => 
    {
      currentMovie = MovieData.find((movie) => movie.title === params.title);
    };
  movie();
  console.log(currentMovie);

  return (
    <div className="w-100 vh-100 bg-dark">
    <div className="container d-flex flex-column align-items-center ">
      <div
        className=" d-flex flex-column align-items-center bg-light mt-5"
        style={{ width: "590px", padding: "10px 5px", borderRadius: "13px" }}
      >
        <h1 className="mb-3">{currentMovie.title}</h1>
        <iframe src={currentMovie.trailer} width="560" height="315" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p style={{ width: "560px" }} className="mt-3">{currentMovie.description}</p>
        <Link to="/">
          <button className="btn btn-primary">back</button>
        </Link>
      </div>
    </div>
  </div>
  )
}
