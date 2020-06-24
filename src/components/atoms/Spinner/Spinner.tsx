import React from 'react';
import { SpinnerWrapper, StyledSpinner } from './Spinner.styles';

const Spinner: React.FC<{}> = () => {
  return (
    <SpinnerWrapper>
      <StyledSpinner />
    </SpinnerWrapper>
  );
};

export default Spinner;
