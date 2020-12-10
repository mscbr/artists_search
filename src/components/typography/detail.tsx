import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledDetail = styled.span<{ color?: string }>`
  font-size: ${theme.typography.fontSize[14]};
  font-weight: ${theme.typography.fontWeight.light};
  color: ${({ color }) => color || theme.palette.detail};
`;

const Detail: React.FC<{ color?: string }> = ({ children, color }) => {
  return <StyledDetail color={color}>{children}</StyledDetail>;
};

export default Detail;
