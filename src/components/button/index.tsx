import React from 'react';
import styled from 'styled-components';

import theme from 'themming';
import Spinner from 'components/spinner';

const StyledButton = styled.button<{
  color?: string;
  size?: string;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size === 'large' ? '240px' : '100px')};
  height: ${({ size }) => (size === 'large' ? '57px' : '32px')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 'initial')};
  background: ${({ color }) => {
    if (color === 'edit') {
      return `${theme.palette.editButton.surface}`;
    }
    if (color === 'secondary') {
      return `${theme.palette.pink}`;
    }
    if (color === 'error') {
      return `${theme.palette.underlineActive}`;
    }
    return `${theme.palette.green}`;
  }};
  color: ${({ color }) =>
    color === 'edit'
      ? `${theme.palette.editButton.label}`
      : `${theme.palette.surface}`};
  border: none;
  border-radius: 5px;
  letter-spacing: ${theme.typography.letterSpacing[1]};
  font-family: ${theme.typography.fontFamily.hind};
  font-size: ${({ size }) =>
    size === 'large'
      ? `${theme.typography.fontSize[16]}`
      : `${theme.typography.fontSize[14]}`};
  font-weight: ${theme.typography.fontWeight.medium};
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
    background: ${({ color, disabled }) => {
      if (disabled) {
        return;
      }
      if (color === 'secondary') {
        return `${theme.palette.pinkHover}`;
      }
      if (color === 'edit') {
        return `${theme.palette.editButton.hover}`;
      }
      if (color === 'error') {
        return `${theme.palette.underlineActive}`;
      }
      return `${theme.palette.greenHover}`;
    }};
  }
  transition: 0.3s;
`;

interface Props {
  color?: string;
  size?: string;
  label: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  color,
  size,
  label,
  onClick,
  loading,
  disabled,
  className
}: Props) => {
  return (
    <StyledButton
      size={size}
      color={color}
      onClick={onClick}
      disabled={loading || disabled}
      className={className}
    >
      {!loading ? label && label.toUpperCase() : <Spinner />}
    </StyledButton>
  );
};

export default Button;
