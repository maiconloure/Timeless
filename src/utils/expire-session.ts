/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';

interface LandingPageProps {
  error: any;
  history: History<LocationState>;
}

const expiredSession = ({ error, history }: LandingPageProps) => {
  localStorage.setItem('Status', `${error.response.data}`);

  if (['jwt expired', 'Missing token'].includes(error.response.data)) {
    setTimeout(() => {
      localStorage.clear();
      history.push('/');
    }, 5500);
  }
};

export default expiredSession;
