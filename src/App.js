import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Norda from './pages/Norda';
import Bikepack from './pages/Bikepack';
import TransitionWrapper from './components/TransitionWrapper';

function App() {
  const location = useLocation();
  const pathname = location.pathname.replace('/', '') || '';

  return (
    <div className={`page-wrapper ${pathname}`}>
      <div className="page-background" />
      <TransitionWrapper key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/norda" element={<Norda />} />
          <Route path="/bikepack" element={<Bikepack />} />
        </Routes>
      </TransitionWrapper>
    </div>
  );
}

export default App;
