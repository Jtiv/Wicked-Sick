import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

function Search(props) {
  //Address is lat lon couplet
  const [Address, setAddress] = useState([]);
  const [forwardGC, setForwardGC] = useState({});

  const handleChange = (e) => {
    setAddress(e.target.value)
  }

  const handleSubmit = (s) => {
    s.preventDefault()
    props.recenterMap(Address)
    console.log("fetch the address: " + Address)
  }

  const forwardGeoCode = async (address) => {
    //logic to include search term in api call  
    const params = {
      access_key: 'd082a061bc23cc199563ea78cab61972',
      query: `${address}`
    };

    let response = await axios.get(
      `http://api.positionstack.com/v1/forward`, { params }
    );
    console.log("forward" + response.data.data[0])
    setForwardGC(response.data.data)
    setAddress(response.data.data[0].latitude, response.data.data[0].longitude)

  };

  return (
    
      <form onSubmit={handleSubmit}>
        <input type="text" value={Address} placeholder={'Search Address'} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>

  )
}

export default Search