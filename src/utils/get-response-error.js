const responseMessages = {
  SERVER_ERROR: 'Server error. Try later.',
  CLIENT_ERROR: 'Client error. Try later.',
  GENERAL_ERROR: 'Error. Try later.',
};

const getResponseError = response => {
  if (!response) {
    return responseMessages.GENERAL_ERROR;
  }
  if (response.ok) {
    return null;
  }
  if (response.data && response.data.message) {
    return response.data.message;
  }
  if (response.problem) {
    const { problem } = response;
    if (problem === 'CLIENT_ERROR') {
      return responseMessages.CLIENT_ERROR;
    }
    if (problem === 'SERVER_ERROR') {
      return responseMessages.SERVER_ERROR;
    }
  }
  return responseMessages.GENERAL_ERROR;
};

export default getResponseError;
