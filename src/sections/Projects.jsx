import { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { BsList, BsGrid } from 'react-icons/bs';
import HoverPreview from '../components/HoverPreview';
import './projects.css';

export default function Projects({ 
  setTransitioning, 
  setTransitionTitle, 
  overlayRef 
}) {
  const [viewMode, setViewMode] = useState('list');
  const [hoveredId, setHoveredId] = useState(null);

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

  const hoveredProject = projects.find(p => p.id === hoveredId);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div 
    className='projects-container' 
    id='projects' 
    onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <div className="view-toggle">
        <h2>SELECTED PROJECTS</h2>
        <div className="toggle-actions">
          <button
            className={`btn-view ${viewMode === 'list' ? 'active-view' : ''}`}
            onClick={() => handleToggle('list')}
          >
            <BsList size={25} className='view'/>
          </button>
          <button
            className={`btn-view ${viewMode === 'grid' ? 'active-view' : ''}`}
            onClick={() => handleToggle('grid')}
          >
            <BsGrid size={25} className='view'/>
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
        />
      ))}

      <HoverPreview 
      hoveredProject={hoveredProject} 
      viewMode={viewMode}
      mousePos={mousePos} 
      />
    </div>
  );
}
