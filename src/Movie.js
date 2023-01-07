import React, { useState, useRef, useEffect } from "react";
import StarRatingComponent from "react-star-rating-component";
import Addmovie from "./Addmovie";
import Ratings from "./Ratings";
import { useNavigate } from "react-router-dom";

function Movie() {
  const [movies, setMovies] = useState([
    {
      name: "The Matrix",
      imgSr:
        "https://static.wikia.nocookie.net/matrix/images/5/56/The_Matrix_digital_release_cover.jpg",
      rate: 3,
      description:
        "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
      movietrailer: "9ix7TUGVYIo",
    },
    {
      name: "The Godfather",
      imgSr:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rate: 4,
      description:
        "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone",
      movietrailer: "sY1S34973zA",
    },
    {
      name: "Pulp Fiction",
      imgSr:
        "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/lurq9eb0ejtyyw2ut10e/pulp-fiction?fimg-client-default",
      rate: 4,
      description:
        "Pulp Fiction is widely regarded as Tarantino's masterpiece, with particular praise for its screenwriting. ",
      movietrailer: "tGpTpVyI_OQ",
    },
  ]);

  const [FiltredList, setFilter] = useState(movies);

  const pn = useRef();
  const pr = useRef();
  const pu = useRef();
  const search = useRef();
  const desc = useRef();
  const tr = useRef();

  const add = () => {
    setMovies([
      ...movies,
      {
        name: pn.current.value,
        rate: pr.current.value,
        imgSr: pu.current.value,
        description: desc.current.value,
        movietrailer: tr.current.value,
      },
    ]);
  };
  const filtrer = () => {
    setFilter(
      movies.filter((e) =>
        e.name.toUpperCase().includes(search.current.value.toUpperCase())
      )
    );
  };

  useEffect(() => {
    setFilter(movies);
  }, [movies]);

  const [rate, setRate] = useState();
  const onStarClick = (x) => {
    setFilter(movies.filter((e) => e.rate >= x));
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="nav">
        <input
          type="text"
          ref={search}
          placeholder="search for your movie"
          className="searchbar"
          onChange={filtrer}
        />
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rate}
          onStarClick={onStarClick}
          className="starfilter"
        />
      </div>
      <div className="Movies">
        {FiltredList.map((e) => (
          <p className="movie">
            {e.name}
            <button
              variant="primary"
              onClick={() =>
                navigate("/movie/" + e.name, {
                  state: {
                    descriptione: e.description,
                    trailer: e.movietrailer,
                  },
                })
              }
              style={{
                margin: "0",
                padding: "0",
                width: "200px",
                height: "280px",
                background: "#860000",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img src={e.imgSr} alt="" />
            </button>
            <Ratings rating={e.rate} />
          </p>
        ))}
        <div className="addButtonContainer movie">
          <Addmovie
            fct={add}
            pn={pn}
            pr={pr}
            pu={pu}
            description={desc}
            tr={tr}
          />
        </div>
      </div>
      <div className="footer">
        <h5>chekpoint n°6 React Router</h5>
        <h5>GMC</h5>
        <h5>Designed by IMED ABBES</h5>
      </div>
    </div>
  );
}

export default Movie;
