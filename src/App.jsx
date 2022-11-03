import { useState } from 'react';
import Datafetcher from './components/Datafetcher';
import MapComponent from './components/MapComponent.jsx';
import Search from './components/Search.jsx';

function App() {

  //pass setters and lift state up from components. 

  const[mapCenter, setMapCenter] = useState([])
  const [markerState, setMarkerState] = useState([])

  const storeIncidentArray = (incArr) => {
    setMarkerState(incArr)
    console.log("state lifted " + markerState)
  }

  const recenterMap = (newCntr) => {
    setMapCenter(newCntr)
    console.log("recentering map")

  }


  return (
    <div className="App">
      <Search recenterMap={ recenterMap } />
      <MapComponent center={mapCenter} />
      <Datafetcher storeIncidentArray={ storeIncidentArray } />  
    </div>
  );
}

export default App;
