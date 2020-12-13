import React from 'react';
import styled from 'styled-components';
import heartMinus from 'assets/heart-minus.png';

const StyledButton = styled.button`
  height: 24px;
  background: transparent;
  display: flex;
  align-items: center;
  border: none;
  &:hover {
    cursor: pointer;
    filter: blur(1px);
  }
  cursor: pointer;
  transition: 0.3s;
`;
const StyledIcon = styled.img`
  height: 26px;
  width: 26px;
`;

interface Props {
  onClick?: () => void;
}

const DeleteButton = ({ onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon src={heartMinus} alt="Remove favourite icon" />
    </StyledButton>
  );
};

export default DeleteButton;
