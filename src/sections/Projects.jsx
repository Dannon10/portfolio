import { useState, useRef, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { BsList, BsGrid } from 'react-icons/bs';
import HoverPreview from '../components/HoverPreview';
import './projects.css';

const PREVIEW_SAFE_ZONE = 260;
const PREVIEW_FADE_START = 1000;

export default function Projects({
  setTransitioning,
  setTransitionTitle,
  overlayRef
}) {
  const [viewMode, setViewMode] = useState('list');
  const [hoveredId, setHoveredId] = useState(null);
  const [previewSuppressed, setPreviewSuppressed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 1 });

  useEffect(() => {
    projects.forEach((project) => {
      const sources = [project.imageDesktop, project.imageMobile].filter(Boolean);
      sources.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const handleToggle = async (mode) => {
    if (mode === viewMode) return;

    await Promise.all(refs.current.map(cardRef => cardRef?.animateExit?.()));
    setViewMode(mode);

    setTimeout(() => {
      refs.current.forEach(cardRef => cardRef?.animateEntrance?.());
    }, 50);
  };

  const handleMouseMove = (e) => {
    const maxX = window.innerWidth - PREVIEW_SAFE_ZONE;
    const distanceFromEdge = window.innerWidth - e.clientX;
    const opacity = Math.min(1, Math.max(0, distanceFromEdge / PREVIEW_FADE_START));

    setMousePos({
      x: Math.min(e.clientX, maxX),
      y: e.clientY,
      opacity,
    });
  };

  const hoveredProject = projects.find(p => p.id === hoveredId);

  return (
    <div
      className='projects-container'
      id='projects'
      onMouseMove={handleMouseMove}
    >
      <div className="view-toggle">
        <h2>SELECTED PROJECTS</h2>
        <div className="toggle-actions">
          <button
            className={`btn-view ${viewMode === 'list' ? 'active-view' : ''}`}
            onClick={() => handleToggle('list')}
          >
            <BsList size={25} className='view' />
          </button>
          <button
            className={`btn-view ${viewMode === 'grid' ? 'active-view' : ''}`}
            onClick={() => handleToggle('grid')}
          >
            <BsGrid size={25} className='view' />
          </button>
        </div>
      </div>

      {projects.map((project, id) => (
        <ProjectCard
          key={id}
          ref={addToRefs}
          {...project}
          viewMode={viewMode}
          setTransitioning={setTransitioning}
          setTransitionTitle={setTransitionTitle}
          overlayRef={overlayRef}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          setPreviewSuppressed={setPreviewSuppressed}
        />
      ))}

      <HoverPreview
        hoveredProject={hoveredProject}
        viewMode={viewMode}
        mousePos={mousePos}
        suppressed={previewSuppressed}
      />
    </div>
  );
}