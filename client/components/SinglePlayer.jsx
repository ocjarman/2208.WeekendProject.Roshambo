import React from "react";
import PropTypes from 'prop-types'


const SinglePlayer = (props) => {
    const { selectedPlayer } = props;
  
    return (
        <div className='player'>
           <p>{selectedPlayer.id} - {selectedPlayer.username}</p>
           {/*  //have to check if there are any games before mapping through or wont work!! */}
           <div>
            {selectedPlayer.games ? selectedPlayer.games.map((game)=>{
              return (
                <p key={game.id}><b>Game {game.id}'s result was: </b>{game.result}</p>
              )
            }): null }
          </div>
      </div>
    )
}

export default SinglePlayer;

SinglePlayer.propTypes = {
    selectedPlayer: PropTypes.object,
}

