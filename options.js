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
      url: 'https://na.api.pvp.net/api/lol/na/v2.2/match/'+matchId,
      qs: {
        api_key: configs.apikey
      }
    }
  },

  currentMatch: function currentMatch (summonerId) {
    return {
      url: 'https://na.api.pvp.net//observer-mode/rest/consumer/getSpectatorGameInfo/{platformId}/{summonerId}',
      qs: {
        api_key: configs.apikey,
      }
    }
  }
};

module.exports = Options;
