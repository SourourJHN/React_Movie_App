import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


export default function MovieCard({movie}) {
  return (
    <div>

        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={movie.posterUrl} alt="moviebox"style={{width: "285px", height: "350px"}}/>

          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
             <Card.Title style={{ height: "25px", width: "auto", overflowY: "auto" }}>{movie.title}</Card.Title>

               <ReactStars
                  count={5}
                  size={20}
                  isHalf={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  value={movie.rating}
                  edit={false}
                />

             <Card.Text style={{ width: "255px", height: "100px", overflow: "auto" }}>{movie.description}</Card.Text>
              <Link to={`${movie.title}/Description`} >
                <Button variant="outline-secondary" style={{ alignSelf: "center" }}>See trailer</Button>
              </Link>
            </Card.Body>
        </Card>
    

    </div>
  )
}
