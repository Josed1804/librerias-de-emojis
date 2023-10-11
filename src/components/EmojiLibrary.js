
import React from 'react';
import EmojiList from './EmojiList';

const emojiData = [
  { 
    symbol: '😊', 
    name: 'Cara Sonriente',
    description: 'Un día soleado en el parque, todos estaban felices y riendo. Los niños jugaban en el césped mientras los adultos charlaban y disfrutaban del buen clima. Era un momento de pura alegría y positividad.'
  },
  { 
    symbol: '🌍', 
    name: 'Globo Terráqueo Europa-África',
    description: 'En un viaje épico alrededor del mundo, exploré los increíbles paisajes de Europa y África. Desde las majestuosas montañas hasta las animadas ciudades, cada lugar tenía su propia magia única.'
  },
  { 
    symbol: '🎓', 
    name: 'Universidad',
    description: 'Entrar en la universidad fue el comienzo de una emocionante aventura educativa. Conocí a personas increíbles, aprendí de profesores inspiradores y descubrí mi pasión por el conocimiento y la investigación.'
  },
  { 
    symbol: '👫', 
    name: 'Amigos',
    description: 'La amistad es un tesoro invaluable. Mis amigos siempre están ahí para apoyarme, reír juntos y compartir momentos inolvidables. Juntos creamos recuerdos que durarán toda la vida.'
  },
  { 
    symbol: '⚽', 
    name: 'Balón de Fútbol',
    description: 'El deporte siempre ha sido una parte importante de mi vida. Cada partido es una oportunidad para desafiarme a mí mismo, trabajar en equipo y experimentar la emoción de la competencia.'
  },
  { 
    symbol: '🎥', 
    name: 'Cámara de Cine',
    description: 'Como amante del cine, cada película es una nueva experiencia. Desde emocionantes aventuras hasta conmovedoras historias, el cine me transporta a mundos diferentes y me permite ver la vida desde perspectivas únicas.'
  },
];

function EmojiLibrary() {
  return (
    <div className="App">
      <h1>Biblioteca de Emojis</h1>
      <EmojiList emojis={emojiData} />
    </div>
  );
}

export default EmojiLibrary;


