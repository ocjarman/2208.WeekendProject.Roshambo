import React from "react";
import PlayerCard from "./PlayerCard.jsx";
import { useState, useEffect } from "react";
import { setPlayerList } from "../features/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//list of all players provided to leaderboard
const AllPlayers = () => {
    const players = useSelector((state) => state.players.playerList)
    const dispatch = useDispatch()
    const getPlayers = async () => {
      const response = await axios.get("/api/players");
      dispatch(setPlayerList(response.data)); //array of player objects
    };
  
    //useEffect runs on loading page one time, doesnt update unless props are inside of the array/second arg
    useEffect(() => {
      getPlayers();
    }, []);

    return (
        <div>
            <h1>Leaderboard: </h1>
            <h3>Players: </h3>
            <div>
            { players.map((player) => (
                <PlayerCard key={player.id} player={player}/>
            ))}      
            </div>
        </div>
    )
}

export default AllPlayers;

