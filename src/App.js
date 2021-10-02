import { useState } from "react";
import "./App.css";
import FriendList from "./Components/FriendList";
import SearchBar from "./Components/SearchBar";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const inputTrack = (input) => {
    setSearchInput(input);
  };

  return (
    <div className="app">
      <SearchBar searchInput={searchInput} inputTrack={inputTrack} />
      <div className="app__body">
        <FriendList searchInput={searchInput} />
      </div>
    </div>
  );
}

export default App;
