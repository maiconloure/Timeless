import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducer';

const store = createStore(reducers, applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof reducers>;
export type DispatchType = typeof store.dispatch;
export default store;
