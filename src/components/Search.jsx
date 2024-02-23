import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Gallary from './Gallary';

const Search = () => {

  const [text,setText] = useState("");
  const [arr,setArr] = useState([]);
  
  const keyname="42285678-65e817645d95e3147e9ea8694";

  function handlechange(e) {
    setText(e.target.value);
    console.log(text);
  }
  function handlesubmit(e){
    e.preventDefault();
    console.log(text);
    axios.get(`https://pixabay.com/api/?key=${keyname}&q=${text}&image_type=photo`)
    .then((response) => {
      setArr(response.data.hits)
      console.log(response.data.hits[0].largeImageURL);
      console.log(response.data.hits[0].tags);
    })
  }

  return (
    <div>
      <h1>Gallary</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" value={text} onChange={handlechange} />
        <button>Searach</button>
      </form>
      <Gallary arr1={arr} />

    </div>
  )
}

export default Search