import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
function SearchResult() {
  const {movie} = useParams();
  const url = `https://imdb-api.com/en/API/Search/k_wvhg40v2/${movie}`
  console.log(url);
  const [data, setData] = useState();
  useEffect(()=> {
    async function func1() {
      const response = await axios.get(url)
      //console.log(response);
      setData(response.data.results);
    }
    func1();

  },[url])

  return (
    <div className="movieCards">
      {
      data?.map((card)=>(
        <div className="movieCard">
        <Link className='movieCardLink' to={`/movie/${card.id}`}>
            <img  src={card.image} alt='movie img' className='movieCardImg'/>
            <h1 className='movieCardTitle'> {card.title}</h1>
        </Link>
      </div>
      ))
      }
      
      {/* <button onClick={()=>setCounter(counter+1)}>Plus</button>
      <p>{counter}</p> */}
    </div>
  );
}

export default SearchResult;
