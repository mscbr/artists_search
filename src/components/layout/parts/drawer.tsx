import React from 'react';
import styled from 'styled-components';

import theme from 'themming';

const StyledDrawer = styled.div<{ open?: boolean }>`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 105%;
  width: ${({ open }) => (open ? '83%' : '0')};
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    width: ${({ open }) => (open ? '33%' : '0')};
  }
  background: ${theme.palette.surface};
  border-right: 1.5px solid black;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  padding: 32px 8px 32px 32px;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  overflow: hidden;
  transition: 0.3s;
`;

interface Props {
  open?: boolean;
}

const Drawer: React.FC<Props> = ({ open, children }) => {
  return (
    <StyledDrawer open={open}>
      <span>FAVOURITES</span>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
