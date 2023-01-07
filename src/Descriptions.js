import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed';
import "./Descriptions.css";

function Descriptions() {
    const location = useLocation();
    useEffect(() => {
        console.log("bla bla bla", location)
 
    }, [])
    
  return (
    <div className="descriptions">
        <Link to="/"><img src="https://www.freepnglogos.com/uploads/logo-home-png/home-icons-icons-devine-icons-part-icon-19.png" alt="" style={{width:'100px',height:'100px',objectFit:'cover'}} /></Link>
        <h1>Description</h1>
        <p>{location.state.descriptione}</p>
        <h1>Trailer</h1>
        <YoutubeEmbed embedId={location.state.trailer}/>
    </div>
  )
}

export default Descriptions
