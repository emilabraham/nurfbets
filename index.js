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

var gameid;

//Callback will print what happens when run an API call with matchid
function getMatchcb (error, response, body) {
  if (error) {
    return console.error('Got an error when calling dankass API', error);
  }

  var parsed = JSON.parse(body);
  console.log("This is the Match shit");
  console.log(parsed.queueType);
  console.log(parsed.participantIdentities[0]);
  console.log(parsed.platformId);
};

//Retrieve the gameid using URFAPI
function callback (error, response, body) {
  if (error) {
    return console.error('Got an error when calling dankass API', error);
  }

  var parsed = JSON.parse(body);
  gameid = parsed[parsed.length-1];
  console.log(gameid);

  request.get(options.getMatch(gameid), getMatchcb);
};

request.get(options.api_challenge(currentTime()), callback);
