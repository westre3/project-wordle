import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import { GUESS_LENGTH, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import GameEndBanner from '../GameEndBanner/GameEndBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(_ => ({ id: crypto.randomUUID(), label: new Array(GUESS_LENGTH + 1).join(' '), validity: range(GUESS_LENGTH).map(_ => undefined) }))
  );
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [won, setWon] = React.useState(false);

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput inputSubmitted={addGuess} disabled={gameOver} />
      {gameOver && <GameEndBanner won={won} numGuesses={currentGuess} answer={answer} />}
    </>
  );

  function addGuess(guess) {
    if (currentGuess + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }

    const newGuesses = [...guesses];
    newGuesses[currentGuess].label = guess;
    newGuesses[currentGuess].validity = computeValidity(guess, answer);

    setGuesses(newGuesses);
    setCurrentGuess(currentGuess + 1);

    if (guess === answer) {
      setGameOver(true);
      setWon(true);
    }
  }

  function computeValidity(guess, answer) {
    return checkGuess(guess, answer).map(checkedGuess => checkedGuess.status);
  }
}

export default Game;
