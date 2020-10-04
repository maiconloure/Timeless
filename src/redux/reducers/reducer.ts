import { combineReducers } from 'redux';

import boards from './boards.reducer';
import service from './service.reducer';
export default combineReducers({ service, boards });
