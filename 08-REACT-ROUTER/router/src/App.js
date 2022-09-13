import { Route, Routes, Link } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import CharacterList from "./Components/CharacterList/CharacterList";
import EpisodeList from "./Components/EpisodeList.js/EpisodeList";
import LocationList from "./Components/LocationList/LocationList";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Inicio</div>} />
        <Route path="character" element={<CharacterList />} />
        <Route path="episode" element={<EpisodeList />} />
        <Route path="location" element={<LocationList />} />
      </Routes>
      ;
    </div>
  );
}

export default App;
