/* eslint-disable */
import axios from 'axios';

export const SendEmail = (msg: any) => {
  var data = {
    service_id: process.env.REACT_APP_SERVICE_ID,
    // template_id: process.env.REACT_APP_TEMPLATE_ID,
    // user_id: process.env.REACT_APP_PUBLIC_KEY,
    template_params: {
      ...msg,
    },
  };
  return axios
    .post('https://api.emailjs.com/api/v1.0/email/send', {
      ...data,
    })
    .then((response) => response)
    .catch((error) => error);
};
