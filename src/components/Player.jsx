import { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();
  //const player = { name: "", isConfirmed: false };
  const [playerName, setPlayerName] = useState(null);

  /*  function handlePlayerName(event) {
    return setPlayerName({ ...playerName, name: event.target.value });
  } */

  function handleClick() {
    //return setPlayerName({ ...playerName, isConfirmed: true });
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "who are you?"}</h2>
      <p>
        <input
          ref={playerNameRef}
          type="text"
          //value={playerName.name}
          // onChange={handlePlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
