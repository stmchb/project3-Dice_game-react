import React from "react";

const StartPage = ({ toggle }) => {
  return (
    <main className="container">
      <div className="dice_image">
        <img src="dices 1.svg" alt="dice-logo" />
      </div>

      <div className="dice_game">
        <h1>DICE GAME</h1>
        <div className="play_now-btn">
          <button onClick={toggle}>Play Now</button>
        </div>
      </div>
    </main>
  );
};

export default StartPage;
