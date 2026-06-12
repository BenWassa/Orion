import React, { useState, useEffect, useRef } from 'react';
import './CoreMap.css';
import InfoPanel from '../InfoPanel/InfoPanel';
import { Gate } from '../../types';

const gates: Gate[] = [
  { id: 'skywalker', name: 'Skywalker', desc: 'The initial call. Form your identity, answer the stirring in your soul, and look to the stars.', angle: -90 },
  { id: 'sankofa', name: 'Sankofa', desc: 'Look back to move forward. Navigate the realm of memory, history, and ancestral roots.', angle: -18 },
  { id: 'agoge', name: 'Agoge', desc: 'The crucible of hardship. Forge your resilience, discipline, and inner strength.', angle: 54 },
  { id: 'ares', name: 'Ares', desc: 'The battlefield of action. Confront conflict, harness your drive, and claim your power.', angle: 126 },
  { id: 'orpheus', name: 'Orpheus', desc: 'The descent into emotion. Express your deepest truths, navigate sorrow, and find your song.', angle: 198 }
];

const CoreMap: React.FC = () => {
  const [activeGate, setActiveGate] = useState<Gate | null>(null);
  const [radius, setRadius] = useState<number>(200);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        setRadius(containerRef.current.offsetWidth / 2.5);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <main className="core-map">
      <div className="wheel-container" ref={containerRef}>
        <button className="center-node" onClick={() => alert('Psychological Profiling Quiz initializing...')}>
          Where Are You?
        </button>
        
        {gates.map((gate) => {
          const rad = gate.angle * (Math.PI / 180);
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div
              key={gate.id}
              className={`gate-node ${activeGate?.id === gate.id ? 'active' : ''}`}
              style={{ left: `calc(50% + ${x}px - 45px)`, top: `calc(50% + ${y}px - 45px)` }}
              onClick={() => setActiveGate(gate)}
            >
              {gate.name}
            </div>
          );
        })}
      </div>
      <InfoPanel activeGate={activeGate} />
    </main>
  );
};
export default CoreMap;