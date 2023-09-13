import './assets/css/fonts.css';
import './App.css';
import { useState } from 'react';
import { ReactComponent as SparksSVG } from './assets/svg/sparks.svg';
import { ReactComponent as ArrowSVG } from './assets/svg/arrow.svg';
import texts from './assets/texts/texts.json';

function App() {
  const defaultColorPalette = {
    text: `rgb(255,240,219)`,
    background: `rgb(23, 54, 36)`
  };
  const [colorPalette, setColorPalette] = useState(defaultColorPalette);
  const [clicked, setClicked] = useState(false);

  const setNewRandomColorPalette = () => {
    setClicked(true);
    const randomColorPalette = {
      text: getRandomColor(),
      background: getRandomColor()
    };
    setColorPalette(randomColorPalette);
  };

  const getRandomColor = () => {
    let r = generateRandomRGB();
    let g = generateRandomRGB();
    let b = generateRandomRGB();
    return `rgb(${r}, ${g}, ${b})`;
  };
  const generateRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  }

  return (
    <div className="App" style={{backgroundColor: colorPalette.background, color: colorPalette.text}}>
        <div class="sparks"><SparksSVG className="sparksSvg" onClick={setNewRandomColorPalette} /><ArrowSVG className="arrowSvg" /><span>{clicked ? 'You can keep clicking!' : 'Click here!'}</span></div>
        <div className="header">
          <h1>Pau Abella</h1>
          <div className="contactPlaces">
            <a href='https://linkedin.com/in/pauabellamolina'>LinkedIn</a>
            <a href='https://github.com/PauAbellaMolina'>GitHub</a>
            <a href='mailto:pauabellamolina1@gmail.com'>Email</a>
          </div>
        </div>
        <div className='content'>
          <span>
            <p>{ texts.para1 }</p>
            <p>{ texts.para2 }</p>
          </span>
          <span>
            <p>{ texts.para3 }</p>
          </span>
          <span>
            <p>{ texts.para4 }</p>
            <p>{ texts.para5 }</p>
          </span>
        </div>
    </div>
  );
}

export default App;
