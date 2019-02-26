// Using async await

class easyHTTP {
  
  // Make an HTTP GET request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
    
  }

  // Make an HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

}