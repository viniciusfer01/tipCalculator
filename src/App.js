import React, { useState } from 'react';
import SearchBox from './components/SeachBox';

function App() {

  const [text, setText] = useState('');
  
  function handleText(newText) {
    setText(newText);
  }

  return (
    <div>
      <h1>Listas</h1>

      <SearchBox 
        onText={handleText}
      />

      <hr />

      <h2>Seu Texto: {text}</h2>

    </div>
  );
}

export default App;
