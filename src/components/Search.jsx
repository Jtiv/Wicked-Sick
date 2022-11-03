import React from 'react';
import { useEffect, useState } from 'react';

function Search(props) {
  const [Address, setAddress] = useState([]);


  const handleChange = (e) => {
    setAddress(e.target.value)
  }

  const handleSubmit = (s) => {
    s.preventDefault()
    props.recenterMap(Address)
    console.log("fetch the address: " + Address)
  }


  return (
    
      <form onSubmit={handleSubmit}>
        <input type="text" value={Address} placeholder={'Search Address'} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>

  )
}

export default Search