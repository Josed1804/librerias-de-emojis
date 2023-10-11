import React from 'react';

function Emoji(props) {
  return (
    <span role="img" aria-label={props.name}>
      {props.symbol}
    </span>
  );
}

export default Emoji;
