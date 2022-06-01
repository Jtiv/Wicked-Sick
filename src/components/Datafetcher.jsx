import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReverseGeoCoder from './ReverseGeoCoder';

function Datafetcher() {
  
  //Methinks that the actual returned component cant be accessed, set and passed to another object all in the same common frame, needs to be broken up into more components.

  const [incidents, setIncidents] = useState([]);
  // const [inputSearch, setInputSearch] = useState('');
  // const [reversedGeo, setReveersedGeo] = useState({});

  const fetchIncident = async () => {
    let response = await axios.get(
      "https://chemspill-api.herokuapp.com/incidents"
    );
    setIncidents(response.data);
  };

  useEffect(() => {
    fetchIncident();    
  }, []);


  if (incidents.length >= 1) {
    return (
      <div>

        <ReverseGeoCoder lat={incidents[1].lat} lon={incidents[1].lon} address={incidents[1].location}/>

        {incidents.map((incident, i) => (
          <p key={i} >{incident.lat + " : " + incident.lon}</p>
        ))
        }
      </div>
    )

  }

  else {
    return (
      <div>
         {incidents.map((incident, i) => (
          <p key={i} >{incident.lat + " : " + incident.lon}</p>
        ))
        }
      </div>
    )
  }

    
}

export default Datafetcher;