var request = require('request');

var options = {
  url: 'https://na.api.pvp.net/observer-mode/rest/featured',
  qs: {
    api_key: 'fce87c83-d6f4-4e5f-98ab-da74bb6448ba'
  }
}

function callback (error, response, body) {
  if (error) {
    return console.error('Got an error when calling dankass API', error);
  }

  var parsed = JSON.parse(body);
  console.log(parsed);
}

request.get(options, callback);
