import React from 'react';
import styled, { keyframes } from 'styled-components';
import loadSpin from 'assets/load-spin.png';

const rotate = keyframes`
    to {
      transform: rotate(360deg);
    } 
`;

const StyledSpinner = styled.div`
  width: 24px;
  height: 24px;
  img {
    animation: ${rotate} 3.6s linear infinite;
  }
`;

const Spinner = () => {
  return (
    <StyledSpinner>
      <img src={loadSpin} alt="Loading spinner" />
    </StyledSpinner>
  );
};

export default Spinner;
