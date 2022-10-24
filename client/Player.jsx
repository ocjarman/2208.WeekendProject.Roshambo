import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Player = (props) => {
    const { player, selectPlayer } = props;
    
    console.log('player jsx', player)
    return (
        <div className="single_player_games" onClick={() => {
            selectPlayer(player.id);
          }}>
        <Link to={`/leaderboard/${player.id}`}>
            <p>
              <b>Name: </b>
              {player.username}
            </p>
        </Link>
      </div>

    //-------------why does the bottom work for selecting player, 
    // but top doesnt and cant use link to direct user?


        // <div className='player' onClick={() => selectPlayer(player.id)}>
            
        //   <p>{player.id} - {player.username}</p>
        // </div>
    )
}

export default Player;

Player.propTypes = {
  player: PropTypes.object,
  selectPlayer: PropTypes.func
}