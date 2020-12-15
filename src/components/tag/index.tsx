import React from 'react';
import styled from 'styled-components';

import theme from 'themming';

const StyledTag = styled.div<Props>`
  color: ${theme.palette.dropdown};
  max-width: 60%;
  font-weight: ${theme.typography.fontWeight.light};
  font-size: ${theme.typography.fontSize[12]};
  padding: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.palette.editButton.surface};
  border-radius: 25px;
  background: ${({ outline }) =>
    outline ? theme.palette.surface : theme.palette.editButton.surface};
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${({ outline }) =>
      outline ? theme.palette.editButton.surface : theme.palette.surface};
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    padding: 12px;
  }
`;

interface Props {
  children?: string;
  outline?: boolean;
  onClick?: () => void;
}

const Tag: React.FC<Props> = ({ children, outline, onClick }) => {
  return (
    <StyledTag onClick={onClick} outline={outline}>
      {children}
    </StyledTag>
  );
};

export default Tag;
