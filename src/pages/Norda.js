import { Link } from 'react-router-dom';
import '../assets/css/fonts.css';
import '../App.css';
import { useState } from 'react';
import { ReactComponent as PauAvatar } from '../assets/svg/pauavatar.svg';

function Norda() {
  const defaultColorPalette = {
    text: `#7958CE`,
    background: `transparent`
  };
  const [colorPalette, setColorPalette] = useState(defaultColorPalette);

  const setNewRandomColorPalette = () => {
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
      <PauAvatar className="pauAvatarSvg" onClick={setNewRandomColorPalette} />
      <div className="header">
        <h1>Norda Tickets</h1>
        <div className="contactPlaces">
          <a href='https://nordatickets.com'>Landing Page</a>
          <a href='https://instagram.com/nordatickets'>Instagram</a>
          <a href='https://www.linkedin.com/company/nordatickets'>LinkedIn</a>
          <a href='mailto:hello@nordatickets.com'>Email</a>
        </div>
      </div>
      <div className='content'>
        <span>
          <p>Check it out <Link className="link" to="https://nordatickets.com">here</Link></p>
        </span>
        <span>
          <p>Boosting event revenues by digitising the sale and management of tickets, drinks and consumables at concerts and festivals.</p>
        </span>
        <span>
          <p>The best purchase experience for attendees—no lines, no cash, just buy your drink using your phone</p>
        </span>
      </div>
    </div>
  );
}

export default Norda; 