function callToApi() {
  return fetch("https://adalab-api.herokuapp.com/api/random/word/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.word;
    });
}

export default callToApi;
