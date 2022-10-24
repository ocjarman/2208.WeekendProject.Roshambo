import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const styles = {
  // border: '5px solid red'
}
const Player = (props) => {
    const { player, selectPlayer } = props;
    
    console.log('player jsx', player)
    return (
        <div style={styles} className="single_player_games" onClick={() => {
            selectPlayer(player.id);
          }}>
        <Link to={`/leaderboard/${player.id}`}>
            <p>
              <b>Name: </b>
              {player.username}
            </p>
        </Link>
      </div>
    )
}

export default Player;

Player.propTypes = {
  player: PropTypes.object,
  selectPlayer: PropTypes.func
}