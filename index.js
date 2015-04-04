var request = require('request');
var options = require('./options.js');

//Return the time according to Riot's specs, minus 10 minutes
function currentTime() {
  var now = new Date();
  var roundedMinutes = Math.round(now.getMinutes()/5) * 5; //Round to nearest 5 minutes
  now.setSeconds(0);
  now.setMinutes(roundedMinutes - 10);
  var finalTime = Math.floor(now/1000); //Get rid of milliseconds

  return finalTime
}

function callback (error, response, body) {
  if (error) {
    return console.error('Got an error when calling dankass API', error);
  }

  var parsed = JSON.parse(body);
  //var gameid = parsed.[
  var gameid = parsed[parsed.length-1];
  /*var elapsedTime = Math.floor(parsed.matchDuration/60);
    console.log('The game lasted for ' + elapsedTime + ' minutes');
    for (var i = 0; i < parsed.participants.length; i++) {
    var lv = parsed.participants[i].stats.champLevel;
    console.log('Champion Level is: ' + lv);
    }*/
};

request.get(options.api_challenge(currentTime()), callback);
