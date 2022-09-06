import { useState, useSyncExternalStore } from "react";
import characters from "../data/Characters";
import CharacterList from "./CharacterList/CharacterList";

const App = () => {
  console.log(
    "🚀 ~ file: App.js ~ line 14 ~ App ~ characters",
    characters,
    typeof characters
  );
  return (
    <div className="App">
      <CharacterList />
    </div>
  );
};

export default App;
