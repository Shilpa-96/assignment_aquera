// PlanetCard.js
import React, { useState, useEffect } from 'react';
import ResidentsDisplay from './ResidentsDisplay';
import "../styles/planetscard.css"

const PlanetsCard = ({ planet }) => {
  const [showResidents, setShowResidents] = useState(false);

  const toggleResidents = () => {
    setShowResidents(!showResidents);
  };

  return (
    <div className="planet-card ">
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <div className='wrapper'>
      <button onClick={toggleResidents}><span>{showResidents ? 'Hide Residents' : 'Show Residents'}</span></button>
      </div>
      {showResidents && <ResidentsDisplay residents={planet.residents} />}
    </div>
  );
};

export default PlanetsCard;
