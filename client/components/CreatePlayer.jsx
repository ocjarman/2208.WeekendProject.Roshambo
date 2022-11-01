import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPlayer } from "../features/playerSlice";


const CreatePlayer = () => {
    const [username, setUsername] = useState("");
  
    const dispatch = useDispatch("")
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        //update backend
        const { data: created } = await axios.post('/api/players', {
          username
        })
        //update front end and redux store
        dispatch(createPlayer(created))
        //redirect user after player created
        navigate('/players')
      };

      //local state needed to collect info here
    const newUsername = (event) => {
      setUsername(event.target.value);
    };

    return (
      <form id="submit-form" onSubmit={handleSubmit}> 
      <label>
        username: 
        <input type="text" value={username} onChange={newUsername} />
      </label>
      <button type="submit" >Create Player</button>
    </form>
    );
  };

export default CreatePlayer;