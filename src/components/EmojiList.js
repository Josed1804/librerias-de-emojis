import React from 'react';
import Emoji from './Emoji';

function EmojiList(props) {
  const emojis = props.emojis.map((emoji, index) => (
    <div key={index} className="emoji-item">
      <Emoji symbol={emoji.symbol} name={emoji.name} />
      <p>{emoji.description}</p>
    </div>
  ));

  return <div className="emoji-container">{emojis}</div>;
}

export default EmojiList;

