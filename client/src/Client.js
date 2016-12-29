function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line
  throw error;
}

function parseJSON(response) {
  return response.json();
}

// This is how you make an api call to the server
// The call is defined in server.js file
function search(query, cb) {
  return fetch(`api/food?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
      .then(parseJSON)
      .then(cb);
}

const Client = { search };
export default Client;
