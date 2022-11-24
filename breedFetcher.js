const request = require('request');
const breed = process.argv[2];

const searchBreed = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    const data = JSON.parse(body);
    if (error) {
      callback(`Failed: ${error}`);
      // const data = JSON.parse(body);
      // console.log(data[0].description);
      // console.log(typeof data);
    } else {
      callback(data[0].description);
    }
  });
};


searchBreed(breed, (typeBreed) => console.log('this is the type of breed', typeBreed));