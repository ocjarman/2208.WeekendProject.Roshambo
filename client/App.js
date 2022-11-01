import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import CreatePlayer from "./components/CreatePlayer.jsx";
import AllPlayers from "./components/AllPlayers.jsx";
import SelectedPlayerById from "./components/SelectedPlayerById.js";

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "aliceBlue",
  fontFamily: "Courier",
  fontSize: "20px",
  textAlign: "center",
};

const App = () => {
  return (
    /* Buttons to diff pages */
    <div className="row container" style={pageStyle}>
      <div id="buttons">
        <Link to={"/"}>
          <button>Home</button>
        </Link>

        <Link to={"/players"}>
          <button>Leaderboard</button>
        </Link>

        <Link to="/create-player">
          <button>New Player</button>
        </Link>

        {/* <Link to="/play">
          <button>Play</button>
        </Link> */}
      </div>

      {/* /* Tells each URL what component it should render thru 'element=' */}
      <Routes>
        <Route path="/" element={<h1>Roshambo!</h1>} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SelectedPlayerById />} />
        <Route path="*" element={<h1>page not found</h1>} />
        <Route path="/create-player" element={<CreatePlayer />} />
      </Routes>
    </div>
  );
};

export default App;
