import React from 'react';
import './App.css';
import CoreMap from './components/CoreMap/CoreMap';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="stars-bg"></div>
      <header className="hub-header">
        <h1>Orion</h1>
        <p>Locate yourself. Choose your Gate.</p>
      </header>
      
      <CoreMap />
    </div>
  );
};

export default App;