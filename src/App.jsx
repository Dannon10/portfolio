import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectProfile from './pages/ProjectProfile';
import LoadingScreen from './components/LoadingScreen';
import TransitionOverlay from './components/HomeTransition';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef();

  const handleLoaded = async () => {
    setIsLoading(false);
    setIsTransitioning(true);

    await transitionRef.current?.enter();

    setHasMounted(true);

    await transitionRef.current?.exit();

    setIsTransitioning(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoaded={handleLoaded} />}
      
      <TransitionOverlay ref={transitionRef} title="Your Title" />

      {hasMounted && (
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectProfile />} />
          </Routes>
        </div>
      )}
    </>
  );
}
