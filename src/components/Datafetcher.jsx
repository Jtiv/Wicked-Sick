import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetcher() {

  const [incidents, setIncidents] = useState([]);
  const [geoCode, setGeoCode] = useState({});
  

  const reverseGeoCode = async (search) => {
    //logic to include search term in api call  
    const params = {
      access_key: 'd082a061bc23cc199563ea78cab61972',
      query: "1600 Pennsylvania Ave NW, Washington DC"
        // `${search}`
    }

    let response = await axios.get(
      `http://api.positionstack.com/v1/forward`, { params }
    );
      console.log(response.data);
  }  

  const fetchIncident = async () => {
    let response = await axios.get(
      "https://chemspill-api.herokuapp.com/incidents"
    );
    setIncidents(response.data);
  }

  useEffect(() => {
    
    fetchIncident();
    reverseGeoCode();
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