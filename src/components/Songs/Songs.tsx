import React from "react";

type SongsType = {
  songs: Array<any>;
};

const Songs: React.FC<SongsType> = ({ songs }) => {
  return (
    <div>
      {songs.map((song) => {
        return <div key={song.id}>{song.title}</div>;
      })}
    </div>
  );
};

export default Songs;
