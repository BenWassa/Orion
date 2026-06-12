import React from 'react';
import './InfoPanel.css';
import { Gate } from '../../types';

interface InfoPanelProps {
  activeGate: Gate | null;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ activeGate }) => {
  return (
    <aside className={`info-panel ${!activeGate ? 'hidden' : ''}`}>
      <h2>{activeGate?.name || 'Select a Gate'}</h2>
      <p>{activeGate?.desc || 'Navigate the map to uncover your path.'}</p>
      <button className="action-btn" disabled={!activeGate}>
        Enter Gate
      </button>
    </aside>
  );
};

export default InfoPanel;