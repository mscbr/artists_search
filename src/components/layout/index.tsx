import React, {
  useState,
  ReactNodeArray,
  useMemo,
  useRef,
  useEffect
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'themming';
import rewind from 'assets/rewind.png';
import FavButton from 'components/button/favButton';
import DeleteButton from 'components/button/deleteButton';
import Tag from 'components/tag';
import { AppState } from 'store';
import { IFavArtist } from 'store/favourites/types';
import FAV_ACTIONS from 'store/favourites/actions';
import BackPathHandler from 'shared/sessionStorage/backPathHandler';
import Drawer from './parts/drawer';

const StyledLayout = styled.div`
  background: ${theme.palette.background};
  min-height: 100vh;
  padding: 8px;
`;
const StyledHeader = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;
const StyledHome = styled.div`
  letter-spacing: ${theme.typography.letterSpacing[1]};
  font-weight: ${theme.typography.fontWeight.black};
  cursor: pointer;
  &:hover {
    text-shadow: 0px 2px 3px ${theme.palette.detail};
  }
  transition: 0.2s;
`;
const StyledBackIcon = styled.img`
  height: 27px;
  width: 27px;
  cursor: pointer;
  &:hover {
    filter: blur(1px);
  }
`;
const StyledFavList = styled.div`
  margin-top: 24px;
  margin-left: -16px;
  display: flex;
  flex-direction: column;
`;
const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  overflow: hidden;
  cursor: pointer;
`;
const StyledBottom = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const StyledSnackbar = styled.div`
  z-index: 100;
  position: fixed;
  height: 30px;
  width: 100%;
  padding: 8px 16px 8px 16px;
  border-radius: 7px;
  bottom: 8px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(30, 30, 30, 0.64);
  color: ${theme.palette.surface};
  font-size: ${theme.typography.fontSize[16]};
  font-weight: ${theme.typography.fontWeight.light};
  cursor: pointer;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    width: auto;
  }
`;

interface Props {
  header?: ReactNodeArray;
  home?: boolean;
}

const Layout: React.FC<Props> = ({ children, header, home }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state: AppState) => state.favReducer);
  const history = useHistory();
  const backPath = BackPathHandler.getPath();
  const favLength = useRef(favourites.length);
  const isMountedRef = useRef<boolean | null>(null);
  const [snack, setSnack] = useState('');

  const enqueueSnackbar = (message: string) => {
    setSnack(message);
    setTimeout(() => setSnack(''), 3000);
    favLength.current = favourites.length;
  };

  useEffect(() => {
    isMountedRef.current = true;
    if (favourites.length !== favLength.current && isMountedRef.current) {
      enqueueSnackbar(
        favourites.length > favLength.current
          ? `${favourites[0].name} added to favourites!`
          : 'Artist removed from favourites'
      );
    }
    return () => {
      isMountedRef.current = false;
    };
  }, [favourites]);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const favListMemo: ReactNodeArray = useMemo(() => {
    return favourites.map((fav: IFavArtist) => {
      return (
        <StyledListItem key={`fav${fav.mbid}`}>
          <Tag
            onClick={() => {
              BackPathHandler.setPath(history.location.pathname);
              history.push(`/artist/${fav.mbid}`);
            }}
            outline
          >
            {fav.name}
          </Tag>
          <DeleteButton onClick={() => dispatch(FAV_ACTIONS.FAV_REMOVE(fav))} />
        </StyledListItem>
      );
    });
  }, [favourites, dispatch, history]);

  return (
    <StyledLayout>
      <StyledHeader>
        {[
          home ? (
            <StyledHome
              onClick={() => {
                BackPathHandler.resetPath();
                history.push('/artists/');
              }}
              key="home-btn"
            >
              HOME
            </StyledHome>
          ) : (
            <div key="empty-div" />
          ),
          backPath && (
            <StyledBackIcon
              src={rewind}
              onClick={() => {
                BackPathHandler.clearPath();
                history.push(backPath);
              }}
              key="back-btn"
            />
          ),
          ...(header || [''])
        ]}
      </StyledHeader>
      <Drawer open={drawerOpen}>
        <StyledFavList>
          {favListMemo && favListMemo.map((item) => item)}
        </StyledFavList>
      </Drawer>
      {children}
      <StyledBottom>
        <FavButton onClick={() => setDrawerOpen((state) => !state)} />
      </StyledBottom>
      {!!snack && (
        <StyledSnackbar onClick={() => setSnack('')}>{snack}</StyledSnackbar>
      )}
    </StyledLayout>
  );
};

export default Layout;
