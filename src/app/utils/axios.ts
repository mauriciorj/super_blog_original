import axios from 'axios';

export const getAxios = ({ url, headers = null }: any) =>
  axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      withCredentials: false,
    })
    .then((response: any) => {
      if (response.status > 300) {
        return { status: 300, response };
      }
      return response;
    })
    .catch((error: any) => error);

export const postAxios = ({ url, data = null, headers = null }: any) =>
  axios
    .post(
      url,
      { ...data },
      {
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      }
    )
    .then((response: any) => {
      if (response.status > 300) {
        return { status: 300, response };
      }
      return response;
    })
    .catch((error: any) => error);

export const getAPIUrl = (payload: string) =>
  `${process.env.REACT_APP_AWS_API_ENDPOINT}/${payload}`;
