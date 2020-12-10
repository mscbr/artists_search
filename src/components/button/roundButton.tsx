import React from 'react';
import styled from 'styled-components';
import theme from 'themming';
import iconAdd from 'assets/icons/icon-add.png';
import iconConfirm from 'assets/icons/icon-confirm.png';

const StyledButton = styled.button<{ type?: 'add' | 'confirm' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background: ${theme.palette.data};
  color: ${({ type }) =>
    type === 'confirm' ? theme.palette.green : theme.palette.surface};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
  opacity: 0.85;
  &:hover {
    cursor: pointer;
    background: ${({ type }) =>
      type === 'confirm' ? theme.palette.greenHover : theme.palette.dataHover};
  }
  transition: 0.3s;
`;

interface Props {
  onClick?: () => void;
  type?: 'add' | 'confirm';
}

const RoundButton: React.FC<Props> = ({ onClick, type }) => {
  return (
    <StyledButton onClick={onClick}>
      {type !== 'confirm' ? (
        <img src={iconAdd} alt="Add icon" />
      ) : (
        <img src={iconConfirm} alt="Confirm icon" />
      )}
    </StyledButton>
  );
};

export default RoundButton;
