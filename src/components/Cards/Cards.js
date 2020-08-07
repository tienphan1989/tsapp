import React from 'react';

import BloodPressureCard from './TestCard/BloodPressureCard';
import SugarCard from './TestCard/SugarCard';
import VaccineFormCard from './TestCard/VaccineFormCard';

class Cards extends React.Component {
  render() {
    return (
      <div className="screening-cards">
        <BloodPressureCard />
        <SugarCard />
        <VaccineFormCard />
      </div>
    );
  }
}

export default Cards;