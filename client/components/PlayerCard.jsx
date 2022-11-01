import React from "react";
import {Link} from 'react-router-dom'


const PlayerCard = ({ player }) => {
  
   return (
      <div>
        <Link to={`/players/${player.id}`}>
            <p>
              name: {player.username} -- id: {player.id}</p>
        </Link>
      </div>
    )
}

export default PlayerCard;
