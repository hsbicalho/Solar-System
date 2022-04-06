import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Mission extends Component {
  render() {
    const theMissions = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {theMissions}
        </div>
      </div>
    );
  }
}

export default Mission;
