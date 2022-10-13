import { useState } from 'react';
import Datafetcher from './components/Datafetcher';
// import MapComponent from './components/MapComponent.jsx';
import Search from './components/Search.jsx';

function App() {

  //pass setters and lift state up from components. 

  const [mapState, setMapState] = useState([]);
  const [markerState, setMarkerState] = useState([])


  return (
    <div className="App">
    {/* <MapComponent/> */}
    <Search />
    <Datafetcher />  
    </div>
  );
}

export default App;
