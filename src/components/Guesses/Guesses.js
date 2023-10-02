import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function Guesses({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map(guess => (
        <Guess key={guess.id} validity={guess.validity}>
          {guess.label}
        </Guess>
      ))}
    </div>
  );
}

export default Guesses;
