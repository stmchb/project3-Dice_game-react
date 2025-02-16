import { useState, useEffect } from "react";

const GamePage = () => {
  const squareArr = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showrule, setShowRule] = useState(false);
  const [error, setError] = useState();

  function rollDice(max, min) {
    if (!selectedNumber) {
      setError("you have Not selected any number.");
      return;
    } else {
      setError("");
    }
    let randomValue = Math.floor(Math.random() * (max - min) + min);
    setDice(randomValue);
    if (randomValue === selectedNumber) {
      setScore((prev) => randomValue + prev);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber();
  }

  function numberChoice(square) {
    setSelectedNumber(square);
    setError("");
  }

  return (
    <>
      <div className="gamepage_container">
        <div className="score">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="select_nums">
          <h3 style={{ color: "red", transition: "all" }}>{error}</h3>
          <div className="sqaure-only">
            {squareArr.map((square, i) => (
              <div
                onClick={() => numberChoice(square)}
                className={`${
                  selectedNumber == square ? "selected_sqare" : ""
                } square`}
                key={i}
              >
                {square}
              </div>
            ))}
          </div>
          <p>select number</p>
        </div>
      </div>
      <div className="dices">
        <img
          onClick={() => rollDice(1, 7)}
          src={`dices/dice_${dice}.svg`}
          alt="Dice"
        />
        <p>click on the dice</p>
        <div className="btns">
          <button onClick={() => setScore(0)} className="reset_score">
            Reset Score
          </button>
          <button
            onClick={() => setShowRule(!showrule)}
            className="show_rule-btn"
          >
            Show Rule
          </button>
        </div>
        {showrule && (
          <div className="show_rule">
            <h2>How to play dice game</h2>
            <p>
              Select any number <br />
              Click on the dice image <br />
              If the selected number is equal to the dice number, you will get
              points equal to the dice value. <br />
              If you guess wrong, 2 points will be deducted.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default GamePage;
