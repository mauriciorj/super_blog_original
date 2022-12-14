import axios from 'axios';

const GetUserGeolocation = async () => {
  const getUserGeolocation = await axios.get(
    'https://geolocation-db.com/json/'
  );
  return getUserGeolocation.data;
};

export default GetUserGeolocation;
