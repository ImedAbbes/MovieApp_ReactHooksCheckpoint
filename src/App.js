import React, {useState,useRef, useEffect} from 'react'
import style from "./App.css";
import Addmovie from './Addmovie';
import Ratings from './Ratings';
import StarRatingComponent from "react-star-rating-component";
import Description from './Description';

function App() {
  
  const [movies, setMovies]=useState([
    {name:"The Matrix" ,imgSr:"https://static.wikia.nocookie.net/matrix/images/5/56/The_Matrix_digital_release_cover.jpg",rate:3,description:"Science fiction movie with the beloved Keanau Reaves"},
    {name:"The Godfather" ,imgSr:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",rate:4,description:"One of the best movies of all times"},
    {name:"Pulp Fiction" ,imgSr:"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/lurq9eb0ejtyyw2ut10e/pulp-fiction?fimg-client-default",rate:4,description:"Action movie staring Samuel L Jackson and Jhon Travolta"}
  ])

  const [FiltredList, setFilter]=useState(movies)

  const pn=useRef()
  const pr=useRef()
  const pu=useRef()
  const search=useRef()
  const desc=useRef()

  const add=()=>{setMovies([...movies,
    {name:pn.current.value,
    rate:pr.current.value,
    imgSr:pu.current.value,
    description:desc.current.value
    }
  ])}
  const filtrer=()=>{
    setFilter(movies.filter(e=>e.name.toUpperCase().includes(search.current.value.toUpperCase())))
  }

  useEffect(()=>{
    setFilter(movies)
  },[movies])
  
  const [rate, setRate] = useState()
  const onStarClick = (x) =>{
    setFilter(movies.filter(e=>e.rate>=x))
  }
  
  
  return (
    <div className='Home'>
      <div className='nav'>
        <input type="text" ref={search} placeholder='search for your movie' className='searchbar' onChange={filtrer} />
        <StarRatingComponent name="rate1" starCount={5} value={rate} onStarClick={onStarClick} className='starfilter' />
      </div>
      <div className='Movies'>
        {FiltredList.map(e=><p className='movie'>{e.name}<Description className="movie" description={e.description} img={e.imgSr}/><Ratings rating={e.rate}/></p>)}
        <div className='addButtonContainer movie'>
          <Addmovie fct={add} pn={pn} pr={pr} pu={pu} description={desc}/>
        </div>
      </div>
      <div className='footer'>
        <h5>chekpoint n°5 React Hooks</h5>
        <h5>GMC</h5>
        <h5>Designed by IMED ABBES</h5>
      </div>
      
    </div>
  )
}

export default App
