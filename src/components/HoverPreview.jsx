import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './hoverPreview.css';

const HoverPreview = ({ hoveredProject, viewMode, mousePos }) => {
    const [currentImage, setCurrentImage] = useState(null);
    const [prevImage, setPrevImage] = useState(null);
    const currentRef = useRef(null);

    useEffect(() => {
        if (!hoveredProject || viewMode !== 'list') {
            setCurrentImage(null);
            setPrevImage(null);
            return;
        }

        if (hoveredProject.imageMobile !== currentImage) {
            setPrevImage(currentImage);
            setCurrentImage(hoveredProject.imageMobile);
        }
    }, [hoveredProject, viewMode]);

    useEffect(() => {
        if (!currentImage || viewMode !== 'list') return;

        gsap.fromTo(
            currentRef.current,
            { y: '-200%' },
            { y: '0%', duration: 0.4, ease: 'power2.out' }
        );
    }, [currentImage, viewMode]);

    if (!currentImage || viewMode !== 'list') return null;

    return (
        <div
            className="hover-preview"
            style={{
                top: mousePos.y + 20,
                left: mousePos.x + 20,
            }}
        >
            {prevImage && (
                <img
                    src={prevImage}
                    alt="Previous project"
                    className="hover-preview-img"
                />
            )}
            <img
                ref={currentRef}
                src={currentImage}
                alt="Current project"
                className="hover-preview-img"
            />
        </div>
    );
};

export default HoverPreview;
