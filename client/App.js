import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Leaderboard from "./Leaderboard.jsx";
import SinglePlayer from "./SinglePlayer.jsx";
import Play from "./Play.jsx";
import axios from "axios";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  const getPlayers = async () => {
    const response = await axios.get("/api/players");
    const playerArray = await response.data;
    setPlayers(playerArray); //array of player objects
  };

  const selectPlayer = async (playerId) => {
    const response = await axios.get(`/api/players/${playerId}`);
    const playerAndTheirGames = await response.data; //why did this change from response.data?
    setSelectedPlayer(playerAndTheirGames);
  };

  //resets 'selected player' to no one when home is clicked
  const handleReset = () => {
    setSelectedPlayer({});
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className="row container">
      <div id="buttons">
        <Link to={"/"}>
          <button onClick={handleReset}>Home</button>
        </Link>
        <Link to={"/leaderboard"}>
          <button>Leaderboard</button>
        </Link>
        <Link to={"/play"}>
          <button>Play</button>
        </Link>
      </div>

      <Routes>
        <Route
          exact
          path="/leaderboard"
          element={
            <Leaderboard
              players={players}
              selectPlayer={selectPlayer}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
              player={selectedPlayer}
            />
          }
        />
        <Route
          path={`/leaderboard/:playerId`}
          element={<SinglePlayer selectedPlayer={selectedPlayer} />}
        />
        {/* <Route exact path="/play" element={<Play />} /> */}
        <Route path="/" element={<p>Home Page</p>} />
      </Routes>
    </div>
  );
};

export default App;
