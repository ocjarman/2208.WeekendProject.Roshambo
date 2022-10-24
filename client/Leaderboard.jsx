import React from "react";
import PropTypes from 'prop-types';
import SinglePlayer from "./SinglePlayer.jsx";
import AllPlayers from './AllPlayers.jsx'
import axios from "axios";


const Leaderboard = (props) => {

    const  {players, selectedPlayer, setSelectedPlayer} = props
 
    const selectPlayer = async (playerId) => {
        const response = await axios.get(`/api/players/${playerId}`);
        const playerAndTheirGames = response.data;
        setSelectedPlayer(playerAndTheirGames);
      };

    return (
        <div id='players_list'>
            {Object.keys(selectedPlayer).length === 0 && 
                <AllPlayers players={players} selectPlayer={selectPlayer}/>}
            {Object.keys(selectedPlayer).length > 0 && <SinglePlayer key={selectedPlayer.id} player={selectedPlayer}/>}
            
      </div>
    )
}

export default Leaderboard;

Leaderboard.propTypes = {
    players: PropTypes.array,
    selectPlayer: PropTypes.func,
    selectedPlayer: PropTypes.object
}

