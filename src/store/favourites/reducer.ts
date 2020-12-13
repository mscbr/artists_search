import { createReducer } from 'store/helpers';
import { TReducers, IFavState, EFavActionTypes, IFavArtist } from './types';

const initState: IFavState = {
  favourites: []
};

const reducers: TReducers = {
  [EFavActionTypes.FAV_ADD]: ({ favourites }, { payload: { artist } }) => ({
    favourites: [artist, ...(favourites as IFavArtist[])]
  }),
  [EFavActionTypes.FAV_REMOVE]: ({ favourites }, { payload: { artist } }) => ({
    favourites: [
      ...(favourites as [])?.filter(
        (fav: { name: string; mbid: string }) => fav.mbid !== artist.mbid
      )
    ]
  })
};

export default createReducer<IFavState>(initState, reducers);
