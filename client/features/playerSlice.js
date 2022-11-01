import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerList: [],
  selectedPlayer: {},
};

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayerList: (state, action) => {
      state.playerList = action.payload;
    },
    createPlayer: (state, action) => {
      state.playerList.push(action.payload);
    },
    deletePlayer: (state, action) => {
      state.playerList = state.playerList.filter((player) => {
        return player.id !== action.payload.id;
      });
    },
    setSelectedPlayer: (state, action) => {
      //changed 'todo' to 'selectedTodo'
      state.selectedPlayer = action.payload;
    },
  },
});

export const { setPlayerList, createPlayer, deletePlayer, setSelectedPlayer } =
  playerSlice.actions;
export default playerSlice.reducer;
