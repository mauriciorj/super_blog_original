import GetUserFingerprint from './getUserFingerprint';
import GetUserGeolocation from './getUserGeolocation';

interface AnalyticsProps {
  pageName: string;
  userId?: string;
}

// eslint-disable-next-line no-unused-vars
const Analytics = async ({ pageName, userId }: AnalyticsProps) => {
  const userFingerprint = GetUserFingerprint();
  const userGeolocation = await GetUserGeolocation();
  // const date = new Date();

  // eslint-disable-next-line no-unused-vars
  const page = pageName;
  // eslint-disable-next-line no-console
  // console.log('page', page);

  return { userFingerprint, userGeolocation };
};

export default Analytics;
