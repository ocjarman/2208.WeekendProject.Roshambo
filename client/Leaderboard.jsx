import React from "react";
import PropTypes from 'prop-types';
import SinglePlayer from "./SinglePlayer.jsx";
import AllPlayers from './AllPlayers.jsx'
import axios from "axios";
import { Link } from "react-router-dom";



const Leaderboard = (props) => {

    const  {players, selectedPlayer, selectPlayer, setSelectedPlayer} = props
    console.log('selectedPlayer in leaderboard', selectedPlayer)
    

    return (
        <div id='players_list'>
            {Object.keys(selectedPlayer).length === 0 && 
                <AllPlayers players={players} selectPlayer={selectPlayer}/>}
            {Object.keys(selectedPlayer).length > 0 && <SinglePlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} />}
            
      </div>
    )
}

export default Leaderboard;

Leaderboard.propTypes = {
    players: PropTypes.array,
    selectPlayer: PropTypes.func,
    selectedPlayer: PropTypes.object
}

