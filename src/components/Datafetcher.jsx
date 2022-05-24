import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetcher() {
  
  //Methinks that the actual returned component cant be accessed, set and passed to another object all in the same command frame, needs to be broken up into more components.

  const [incidents, setIncidents] = useState([]);
  const [geoCode, setGeoCode] = useState({});
  

  const reverseGeoCode = async (lat, lon) => {
    //logic to include search term in api call  
    const params = {
      access_key: 'd082a061bc23cc199563ea78cab61972',
      query: `${lat},${lon}`
    }

    let response = await axios.get(
      `http://api.positionstack.com/v1/reverse`, { params }
    );
      console.log(response.data.data[0].name);
  }  

  const fetchIncident = async () => {
    let response = await axios.get(
      "https://chemspill-api.herokuapp.com/incidents"
    );
    setIncidents(response.data);
  }

  useEffect(() => {
    
    fetchIncident();
    // console.log("lets log the" + incidents[0].lat, incidents[0].lon);
    reverseGeoCode(26.768562 , -80.0497);
  }, []);

    return (
      <div>
        {incidents.map((incident, i) => (
          <p key={i} >{incident.lat + " : " + incident.lon}</p>
        ))
        }
      </div>
    )
}

export default Datafetcher