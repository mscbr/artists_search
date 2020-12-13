import { prepareActions } from 'store/helpers';
import { EFavActionTypes } from './types';

const ACTIONS_DATA = [
  [EFavActionTypes.FAV_ADD, 'artist'],
  [EFavActionTypes.FAV_REMOVE, 'artist']
];

const ACTIONS = prepareActions(ACTIONS_DATA);
export default ACTIONS;
