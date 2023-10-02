import React from 'react';

function GameEndBanner({ won, numGuesses, answer }) {
  if (won) {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameEndBanner;
