import React from "react";
import Player from "./Player.jsx";
import PropTypes from 'prop-types';

//list of all players provided to leaderboard
const AllPlayers = (props) => {
const { players, selectPlayer, selectedPlayer } = props;

    return (
        <div id='players'>
        { players.map((player) => { 
            return <Player 
                key={player.id} 
                player={player}
                selectPlayer={selectPlayer}
                selectedPlayer={selectedPlayer}/>})}      
        </div>
    )
}

export default AllPlayers;

AllPlayers.propTypes = {
    players: PropTypes.array,
    selectPlayer: PropTypes.func,
    selectedPlayer: PropTypes.object
}