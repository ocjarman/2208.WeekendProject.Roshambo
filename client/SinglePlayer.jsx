import React from "react";
import PropTypes from 'prop-types'


const SinglePlayer = (props) => {
    const { player } = props;
    const gamesArray = player.games
    return (
        <div className='player' onClick={() => selectPlayer(player.id)}>
           <p>{player.id} - {player.username}</p>
            {gamesArray.map((game) => {return <div key={game.id}><p>Game #: {game.id}</p><p>Winner: {game.result}</p></div>})}        </div>
    )
}

export default SinglePlayer;

SinglePlayer.propTypes = {
  player: PropTypes.object,
}