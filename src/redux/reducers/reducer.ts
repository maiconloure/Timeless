import { combineReducers } from 'redux';

import boards from './boards.reducer';
import cards from './cards.reducer';
import feed from './feed.reducer';
import service from './service.reducer';

export default combineReducers({ service, boards, cards, feed });
