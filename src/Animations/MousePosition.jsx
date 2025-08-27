import { useState, useEffect } from 'react';

function MousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="MousePosition">
      <div
        style={{
          position: 'absolute',
          left: mousePosition.x,
          top: mousePosition.y,
          width: '20px',
          height: '20px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}
export default MousePosition;