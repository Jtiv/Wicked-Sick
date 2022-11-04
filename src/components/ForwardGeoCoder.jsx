import { useState, useEffect } from 'react';
import axios from 'axios';



function ForwardGeoCoder(props) {

  const [forwardGC, setForwardGC] = useState({});

  const forwardGeoCode = async (address) => {
    //logic to include search term in api call  
    const params = {
      access_key: 'd082a061bc23cc199563ea78cab61972',
      query: `${address}`
    };

    let response = await axios.get(
      `http://api.positionstack.com/v1/forward`, { params }
    );
    console.log("forward" + response.data.data[0]);
    setForwardGC(response.data.data);
  };

  useEffect(() => {
    forwardGeoCode(props.address);
  
  },[props])



  return (
    <div>
      <div>ForwardGeoCoder</div>
      <p> {forwardGC.latitude} {forwardGC.longitude}</p>
    </div>
  )
}

export default ForwardGeoCoder