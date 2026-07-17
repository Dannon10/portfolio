import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectProfile from './pages/ProjectProfile';
import LoadingScreen from './components/LoadingScreen';
import TransitionOverlay from './components/HomeTransition';

export default function App() {
  const alreadyVisited = sessionStorage.getItem('hasVisited') === 'true';

  const [isLoading, setIsLoading] = useState(!alreadyVisited);
  const [hasMounted, setHasMounted] = useState(alreadyVisited);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef();

  const handleLoaded = async () => {
    setIsLoading(false);
    setIsTransitioning(true);

    await transitionRef.current?.enter();

    setHasMounted(true);

    await transitionRef.current?.exit();

    setIsTransitioning(false);

    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoaded={handleLoaded} />}

      {!alreadyVisited && (
        <TransitionOverlay ref={transitionRef} title="Your Title" />
      )}

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