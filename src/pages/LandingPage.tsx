import React from 'react';
import BackButton from '../components/atoms/BackButton/BackButton';

interface Props {}

const LandingPage: React.FC<Props> = () => {
  return (
    <div>
      <BackButton />
      <h1>wow</h1>
    </div>
  );
};

export default LandingPage;
