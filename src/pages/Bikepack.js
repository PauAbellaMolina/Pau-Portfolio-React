import '../assets/css/fonts.css';
import '../App.css';
import { useState } from 'react';
import { ReactComponent as SparksSVG } from '../assets/svg/sparks.svg';
import { ReactComponent as ArrowSVG } from '../assets/svg/arrow.svg';
import BP1 from '../assets/images/bp1.webp';
import BP2 from '../assets/images/bp2.webp';
import BP3 from '../assets/images/bp3.webp';
import BP4 from '../assets/images/bp4.webp';
import BP5 from '../assets/images/bp5.webp';
import BP6 from '../assets/images/bp6.webp';
import BP7 from '../assets/images/bp7.webp';
import BP8 from '../assets/images/bp8.webp';

function Bikepack() {
  const defaultColorPalette = {
    text: `#0f4c81`,
    background: `transparent`
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
      <div className="sparks"><SparksSVG className="sparksSvg" onClick={setNewRandomColorPalette} /><ArrowSVG className="arrowSvg" /><span>{clicked ? 'You can keep clicking!' : 'Click here!'}</span></div>
      <div className="centered-header">
        <h1>On the bike</h1>
      </div>
      <div className='sparse-grid-content'>
        <img src={BP1} alt="I love tiny single paths like this" />
        <img src={BP2} alt="Packing up" />
        <img src={BP3} alt="I wanted to check out the beach" />
        <img src={BP4} alt="Green!" />
        <img src={BP5} alt="So fast" />
        <img src={BP6} alt="Found this randomly, it was really cool" />
        <img src={BP7} alt="Swedish hills" />
        <img src={BP8} alt="Rainy day, flowers on the back" />
      </div>
    </div>
  );
}

export default Bikepack; 