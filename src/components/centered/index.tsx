import React from 'react';
import styled from 'styled-components';

const StyledCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .centered {
    position: relative;
    text-align: center;
    top: 50%;
    left: 50%;
  }
`;

const Centered: React.FC = ({ children }) => {
  return (
    <StyledCenter>
      <div className="centered">{children}</div>
    </StyledCenter>
  );
};

export default Centered;
