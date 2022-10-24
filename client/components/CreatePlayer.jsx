import React from "react";
import axios from "axios";
import { useState } from "react";


// Displays a small form with two items:
// Username text input: decides the new users  username
// Submit button: Makes a post request to /api/players sending up the players username

const formStyles = {
    display: 'flex',
    flexDirection: "column",
    padding: '20px',
    width: '50%'
}
const CreatePlayer = () => {

    const [username, setUsername] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(false);
  
    const newUsername = (event) => {
      setUsername(event.target.value);
      if (username.length < 3) setIsValidUsername(false);
      else setIsValidUsername(true);
    };

   
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submitting!");
        const body = {username: username}
        const response = await axios.post('/api/players', body)
        console.log(await response)
      };

    return (
      <form style={formStyles} onSubmit={handleSubmit}> 
      <label>
        username: 
        <input type="text" value={username} onChange={newUsername} />
        {!isValidUsername && <p>your username needs to be more than 3 characters!</p>}
      </label>

      <button type="submit" >Create Player</button>
    </form>
    );
  };

export default CreatePlayer;

