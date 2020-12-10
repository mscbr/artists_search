import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.div`
  width: 24px;
  height: 24px;
  background: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  transition: 0.3s;
  .x1 {
    height: 25px;
    width: 2px;
    margin-left: 12px;
    background-color: black;
    transform: rotate(45deg);
    z-index: 1;
  }
  .x2 {
    height: 25px;
    width: 2px;
    background-color: black;
    transform: rotate(90deg);
    z-index: 2;
  }
`;

interface Props {
  onClick?: () => void;
}

const CloseButton = ({ onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      <div className="x1">
        <div className="x2" />
      </div>
    </StyledButton>
  );
};

export default CloseButton;
