import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Actor() {
    const {actorId} = useParams();
    const[data, setData] =useState()
    const url=`https://imdb-api.com/API/Name/k_wvhg40v2/${actorId}`
    useEffect(()=> {
        async function func1() {
          const response = await axios.get(url);
          console.log(response.data);
          setData(response.data)
          
        }
        func1();
    
      },[url]);

    return (
        <div>
            <div className='actorCircle'>
                <img src= {data?.image} alt='actor' />
            </div> 
            <div className='actorDetails'> 
                <h1>{data?.name}</h1>
                <h5>{data?.role}</h5>  
                <p>{data?.summary}</p>
                <h2>{data?.awards}</h2>
            </div>
            <div className='actorMovies'>
                {
                    data?.knowFor?.map((movie)=>(
                
                <div className='actorCard'>
                    <Link to={`/movie/${movie.id}`}>
                        <img src={movie?.image}alt='movie' />
                        <h3>{movie?.title}</h3>
                    </Link>
                    
                </div>
                ))
                }
            </div>
        </div>
    )
}

export default Actor;
