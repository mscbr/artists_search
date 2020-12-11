import React from 'react';
import styled, { keyframes } from 'styled-components';
import loadSpin from 'assets/load-spin.png';

const rotate = keyframes`
    to {
      transform: rotate(360deg);
    } 
`;

const StyledSpinner = styled.div`
  width: 27px;
  height: 27px;
  img {
    animation: ${rotate} 2.6s linear infinite;
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
