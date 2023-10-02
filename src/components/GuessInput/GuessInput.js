import React from 'react';
import { GUESS_LENGTH } from '../../constants';

function GuessInput({ disabled, inputSubmitted }) {
  const [guessInput, setGuessInput] = React.useState('');
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className='guess-input-wrapper' onSubmit={submitHandler}>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        id='guess-input'
        ref={inputRef}
        type='text'
        pattern={`[a-zA-z]{${GUESS_LENGTH}}`}
        required={true}
        value={guessInput}
        onChange={event => {
          if (event.target.value.length > 5) {
            return;
          }
          setGuessInput(event.target.value.toUpperCase());
        }}
        disabled={disabled}
      />
    </form>
  );

  function submitHandler(event) {
    event.preventDefault();
    inputSubmitted(guessInput);
    setGuessInput('');
  }
}

export default GuessInput;
