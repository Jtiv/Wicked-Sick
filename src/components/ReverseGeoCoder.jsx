import { useState, useEffect } from 'react';
import axios from 'axios';

function ReverseGeoCoder(props) {
  const [geoCodes, setGeoCodes] = useState([]);
  
  const reverseGeoCode = async (lat, lon) => {
    //logic to include search term in api call  
    const params = {
      access_key: 'd082a061bc23cc199563ea78cab61972',
      query: `${lat},${lon}`
    };

    let response = await axios.get(
      `http://api.positionstack.com/v1/reverse`, { params }
    );
    console.log(response.data.data[0].name);
    setGeoCodes(response.data.data);
  };  

  useEffect(() => {
    reverseGeoCode(props.lat, props.lon);
  },[props])



  return (
    <div>
      <h1>ReverseGeoCoder</h1>
      {geoCodes.map((geoCode, i) => (
          <p key={i} >{geoCode.name}</p>
        ))
        }
    </div>
  )
}

export default ReverseGeoCoder