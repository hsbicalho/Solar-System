import React from 'react';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ planetName } />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
