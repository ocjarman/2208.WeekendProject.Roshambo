import React from "react";
import Player from "./Player.jsx";
import PropTypes from 'prop-types';


const AllPlayers = (props) => {
const { players, selectPlayer } = props;
    return (
        <div id='players'>
        { players.map((player) => { 
            return <Player 
                key={player.id} 
                player={player}
                selectPlayer={selectPlayer}/>})}      
        </div>
    )
}

export default AllPlayers;

AllPlayers.propTypes = {
    players: PropTypes.array,
    selectPlayer: PropTypes.func
}