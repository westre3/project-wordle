import React from 'react';

function Guess({ children, validity }) {
  return (
    <p className='guess'>
      {children.split('').map((letter, index) => (
        <span key={index} className={validity[index] ? `cell ${validity[index]}` : 'cell'}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
