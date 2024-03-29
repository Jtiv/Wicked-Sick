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
    //console.log(response.data.data[0].latitude);
    setGeoCodes(response.data.data);
  };  
  
  useEffect(() => {
    //forwardGeoCode(props.address);
    reverseGeoCode(props.lat, props.lon);
  },[props])



  return (
    //geoCode is a copied individual from array of geocodes. 
    //Label is field of data in set that I think feels closest to address.
    <div>
      <h1>ReverseGeoCoder</h1>
      blah
      {geoCodes.map((geoCode, i) => (
          <p key={i} >{geoCode.label}</p>
        ))
        }
    </div>
  )
}

export default ReverseGeoCoder