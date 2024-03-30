const URL_BASE = "http://localhost:3000/files/data"; // URL of the API endpoint

/**
 * Retrieves data from the API endpoint and returns it.
 *
 * @return {Promise<Object>} The response data from the API endpoint.
 */
export const getFilesAPI = async () => {
  try {
    const response = await fetch(URL_BASE); // Get all files without errors from the API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilesByQueryAPI = async (query) => {
  try {
    const response = await fetch(`${URL_BASE}?fileName=${query}`); // Get file with queryparam from the API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
