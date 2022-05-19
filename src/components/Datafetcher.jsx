import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetcher() {

  const [incidents, setIncidents] = useState([]);
  // const reverseGeoCode = async (search) => {
  //   //logic to include search term in api call
    
  //   await axios.get(dataLink);
  //   console.log(response.data);
  // }  

  const fetchIncident = async () => {
    let response = await axios.get(
      "https://chemspill-api.herokuapp.com/incidents"
    );
    setIncidents(response.data);
  }

  useEffect(() => {
    fetchIncident();
  }, []);


  return (
    <div>
        {incidents.map((incident, i) => (
          <p>{incident.lat + " : " + incident.lon}</p>
        ))
      }
    </div>
  )
}

export default Datafetcher