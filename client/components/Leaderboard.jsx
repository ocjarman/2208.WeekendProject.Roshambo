import React from "react";
import PropTypes from 'prop-types';
import SinglePlayer from "./SinglePlayer.jsx";
import AllPlayers from './AllPlayers.jsx'


const leaderboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'aliceBlue',
    fontFamily: 'Courier'
}

const Leaderboard = (props) => {

    const  {players, selectedPlayer, selectPlayer} = props    

    return (
        <div id='players_list' style={leaderboardStyle}>
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

