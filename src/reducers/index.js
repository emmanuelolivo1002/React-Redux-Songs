import { combineReducers } from "redux";

// Return the static array of song objects
const songsReducer = () => {
  return [
    {
      title: "Never Gonna Give You Up",
      artist: "Rick Astley"
    },
    {
      title: "All Star",
      artist: "Smash Mouth"
    },
    {
      title: "Africa",
      artist: "Toto"
    },

    {
      title: "Sandstorm",
      artist: "Darude"
    }
  ];
};

// Return the selected song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

// Export the reducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
