import axios from 'axios';

async function request(url, token) {
  try {
    const response = await axios.get(url, {
      headers: {
        // eslint-disable-next-line prefer-template
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default request;
