import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import appLogo from '../images/moviebox-logo.jpg';
import AddMovie from './AddMovie';


export default function ({movieName, titleSearch ,setMovieName, setTitleSearch,ratingSearch, setRatingSearch}) {

    const handleChange = (event) => setTitleSearch(event.target.value);
    const ratingChanged = (s) => {
                                    setRatingSearch(s);
                                 };

  return (
    <div>
     <Navbar className="navbar navbar-dark bg-yellow" style={{marginLeft:"30px"}}>
       <img src={appLogo} alt="MovieBox" width="150px" style={{borderRadius:"30px"}} />
       <nav className="nav nav-pills flex-column"
        style={{ maxHeight: "50px",fontSize: "20px",fontweight: "bolder",marginRight: "50px",color: "white"}}
       >
         
       </nav>

       <Form className="d-flex">
        <FormControl type="search" placeholder=" Movie Title" className="mr-2"
          aria-label="Search" onChange={handleChange} style={{ width: "200px" }} value={titleSearch}
        />
      </Form>

      <div className="rating-by-stars" style={{marginLeft: "50px",width: "500px", display: "flex",flexDirection: "column",
             justifyContent: "space-around"}}
      >
        <span>
          <i>Search by rating</i>
        </span>
          <ReactStars
             count={5}
             onChange={ratingChanged}
             size={20}
             isHalf={false}
             emptyIcon={<i className="far fa-star"></i>}
             halfIcon={<i className="fa fa-star-half-alt"></i>}
             fullIcon={<i className="fa fa-star"></i>}
             activeColor="#B0E0E6"
             value={ratingSearch}
        />
      </div>
        <AddMovie setMovieName={setMovieName} movieName={movieName} />
     </Navbar>
    </div>
  )
}
