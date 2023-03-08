import './App.css';
import Form from './components/Form/Form';
import Image from './components/Image/Image';

import dataMemes from './assets/dataMemes.json'
import React from 'react';

function App() {
  const [meme, setMeme] = React.useState({
    top: '',
    bottom: '',
    image: dataMemes.data.memes[0]
  });

  const handlerClick = () => {
    const randomNumber = Math.round(Math.random() * (100 - 0) + 0)
    setMeme(prevMeme => ({
      ...prevMeme,
      image: dataMemes.data.memes[randomNumber]
    }))
  }

  const handlerChange = (event) => {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value
    }))
  }


  return (
    <div className="App">
      <header className="header">
        <h1 className="title">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="trollface meme" />
          <span>Meme Generator</span>
        </h1>
        <span>React Course - Project 3</span>
      </header>
      <main className="main">
        <Form handlers={{ handlerClick, handlerChange }} />
        <Image meme={meme} />
      </main>
    </div>
  );
}

export default App;
