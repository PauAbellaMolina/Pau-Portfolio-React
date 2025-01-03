import { Link } from 'react-router-dom';
import '../assets/css/fonts.css';
import '../App.css';
import { useState } from 'react';
import { ReactComponent as SparksSVG } from '../assets/svg/sparks.svg';
import { ReactComponent as ArrowSVG } from '../assets/svg/arrow.svg';

function Home() {
  const defaultColorPalette = {
    text: `#fff0db`,
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
          <p>I'm a Frontend Engineer & Product Designer passionate about solving problems</p>
          <p>through software and good design.</p>
        </span>
        <span>
          <p>I also surf when there are waves and run when there isn't.</p>
        </span>
        <span>
          <p>Founder and builder at <Link className="link" to="/norda">Norda Tickets</Link>, the best cashless ticketing solution for events.</p>
          <p>Connect with me and check out my detailed experience on LinkedIn.</p>
        </span>
      </div>
    </div>
  );
}

export default Home; 