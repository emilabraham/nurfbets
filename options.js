var configs = require('./utils/config-utils');
// The options for the requests to Riot's API


var Options = {
  api_challenge: function api_challenge (time) {
    return {
      url: 'https://na.api.pvp.net/api/lol/na/v4.1/game/ids',
      qs: {
        api_key: configs.apikey,
        beginDate: time
      }
    };
  },

  getMatch: function getMatch (matchId) {
    return {
      url: 'https://na.api.pvp.net/api/lol/na/v2.2/match',
      qs: {
        match
};

module.exports = Options;
