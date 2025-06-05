import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoaded }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          onLoaded();
        }
        return next >= 100 ? 100 : next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="loading-screen">
      <img src="/images/favicon-3.png" alt="Logo" className="logo" />
      <div className="loading-count">{Math.round(count)}%</div>
    </div>
  );
};

export default LoadingScreen;
