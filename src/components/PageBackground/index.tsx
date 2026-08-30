import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import './PageBackground.scss';

interface BackgroundWrapperProps {
    children: ReactNode;
}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  const location = useLocation();
  
  const getBackgroundClass = () => {
    switch (location.pathname) {
      case '/dolphin':
        return 'dolphin';
      default:
        return 'main';
    }
  };

  return (
    <div className={`background ${getBackgroundClass()}`}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;