const axios = require('axios');

const fetchNumbersWithTimeout = async (url, token) => {
  try {
    const response = await axios.get(url, {
      timeout: 450,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.numbers || [];
  } catch (err) {
    return [];
  }
};

module.exports = fetchNumbersWithTimeout;
