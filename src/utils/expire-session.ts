/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import { ThunkAction } from 'redux-thunk';

import { updateStatus } from '../redux/actions/service.action';
import * as TYPE from '../redux/actions/type.action';
import { RootStoreType } from '../redux/store/store';

interface LandingPageProps {
  error: any;
  history: History<LocationState>;
}

export interface UpdateStatusAction {
  type: typeof TYPE.UPDATE_STATUS;
}

const expiredSession = ({
  error,
  history,
}: LandingPageProps): ThunkAction<void, RootStoreType, unknown, UpdateStatusAction> => (
  dispatch
) => {
  if (['jwt expired', 'Missing token'].includes(error.response.data)) {
    dispatch(updateStatus(440));
    setTimeout(() => {
      localStorage.clear();
      history.push('/');
    }, 5000);
  }
};

export default expiredSession;
