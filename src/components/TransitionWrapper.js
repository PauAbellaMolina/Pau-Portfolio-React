import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TransitionWrapper({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== displayChildren.props.pathname) {
      setDisplayChildren(children);
    }
  }, [location, children, displayChildren.props.pathname]);

  return (
    <div className="page-content">
      {displayChildren}
    </div>
  );
}

export default TransitionWrapper; 