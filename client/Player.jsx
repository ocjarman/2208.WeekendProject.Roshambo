import React from "react";
import PropTypes from 'prop-types'

const Player = (props) => {
    const { player, selectPlayer } = props;

    return (
        <div className='player' onClick={() => selectPlayer(player.id)}>
          <p>{player.id} - {player.username}</p>
        </div>
    )
}

export default Player;

Player.propTypes = {
  player: PropTypes.object,
  selectPlayer: PropTypes.func
}