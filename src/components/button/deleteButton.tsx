import React from 'react';
import styled from 'styled-components';
import theme from 'themming';
import iconDelete from 'assets/icons/icon-delete.png';

const StyledButton = styled.button`
  height: 24px;
  color: ${theme.palette.pink};
  background: transparent;
  display: flex;
  align-items: center;
  font-family: ${theme.typography.fontFamily.hind};
  font-size: ${theme.typography.fontSize[12]};
  font-weight: ${theme.typography.fontWeight.medium};
  letter-spacing: ${theme.typography.letterSpacing[1]};
  border: none;
  span {
    margin-left: 12px;
    margin-top: 4px;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  transition: 0.3s;
`;

interface Props {
  onClick?: () => void;
}

const DeleteButton = ({ onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={iconDelete} alt="Delete icon" />
      <span>DELETE EVENT</span>
    </StyledButton>
  );
};

export default DeleteButton;
