import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { deletePlayer, setSelectedPlayer } from "../features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const SelectedPlayerById = () => {
  const params = useParams();
  const selectedPlayer = useSelector((state) => state.players.selectedPlayer);
  const navigate = useNavigate();
  const [loadStatus, setLoadStatus] = useState(false);
  const dispatch = useDispatch("");

  //get data for selected player when user clicks on player
  const fetchSelectedPlayer = async () => {
    setLoadStatus(true);
    const selected = await axios.get(`/api/players/${params.id}`);
    //update front end and redux store
    dispatch(setSelectedPlayer(selected.data));
    setLoadStatus(false);
  };

  useEffect(() => {
    fetchSelectedPlayer();
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();
    //update backend
    const { data: deleted } = await axios.delete(`/api/players/${params.id}`, {
      //no new info needed to delete
    });
    //update front end and redux store
    dispatch(deletePlayer(deleted));
    navigate("/players");
  };

  if (loadStatus) return <p>LOADING.....</p>;
  return (
    <div>
      <h1>hello</h1>
      <h3>{selectedPlayer.username}</h3>
      <button onClick={handleDelete}>delete player</button>
      <h5>Games: </h5>
      <div key={selectedPlayer.id}>
        {selectedPlayer.games &&
          selectedPlayer.games.map((game) => (
            <p key={game.id}>
              {game.id}: {game.result}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SelectedPlayerById;
