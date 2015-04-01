var request = require('request');

var options = {
  url: 'https://na.api.pvp.net/api/lol/na/v2.2/match/1778704162',
  qs: {
    includeTime: true,
    api_key: 'fce87c83-d6f4-4e5f-98ab-da74bb6448ba'
  }
}

function callback (error, response, body) {
  if (error) {
    return console.error('Got an error when calling dankass API', error);
  }

  var parsed = JSON.parse(body);
  console.log(parsed);
  var elapsedTime = Math.floor(parsed.matchDuration/60);
  console.log('The game lasted for ' + elapsedTime + ' minutes');
  for (var i = 0; i < parsed.participants.length; i++) {
    var lv = parsed.participants[i].stats.champLevel;
    console.log('Champion Level is: ' + lv);
  }
};

request.get(options, callback);
