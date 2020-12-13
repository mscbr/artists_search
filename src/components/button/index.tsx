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
  width: ${({ size }) => (size === 'large' ? '240px' : '72px')};
  height: ${({ size }) => (size === 'large' ? '57px' : '32px')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 'initial')};
  background: ${({ color }) => {
    if (color === 'dark') {
      return `${theme.palette.data}`;
    }
    return `${theme.palette.surface}`;
  }};
  color: ${({ color }) =>
    color === 'dark' ? `${theme.palette.surface}` : `${theme.palette.data}`};
  filter: ${({ color }) => (color === 'dark' ? 'invert(1)' : 'invert(0)')};
  border: 0.5px solid ${theme.palette.data};
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
      if (color === 'dark') {
        return `${theme.palette.surface}`;
      }
      return `${theme.palette.dataHover}`;
    }};
    color: ${({ color, disabled }) => {
      if (disabled) {
        return;
      }
      if (color === 'dark') {
        return `${theme.palette.dataHover}`;
      }
      return `${theme.palette.surface}`;
    }};
    filter: invert(1);
  }
  transition: 0.3s;
`;

interface Props {
  color?: string;
  size?: string;
  label: string | JSX.Element;
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
      {!loading ? label && label : <Spinner />}
    </StyledButton>
  );
};

export default Button;
