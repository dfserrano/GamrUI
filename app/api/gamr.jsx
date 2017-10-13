/*
 * Performs the operations related to the Gamr API
 */

var axios = require('axios');

const GAMR_API_URL = 'http://localhost:8888/api';

module.exports = {
  /* Gets random game */
  getRandom: function () {
    var requestUrl = GAMR_API_URL + "/games/random";

    return axios.get(requestUrl).then(function (res) {
      return res.data.data;
    }, function (res) {
      var message = "Unreachable server error";
      if (res.data.errors[0] != undefined) {
        message = res.data.errors[0].title;
      }

      throw new Error(message);
    });
  },

  /* Gets top 3 games */
  getTopGames: function () {
    var requestUrl = GAMR_API_URL + "/games/top?n=3";

    return axios.get(requestUrl).then(function (res) {
      return res.data.data;
    }, function (res) {
      var message = "Unreachable server error";
      if (res.data.errors[0] != undefined) {
        message = res.data.errors[0].title;
      }

      throw new Error(message);
    });
  },

  /* Votes for the specific game using the rating provided */
  voteGame: function (gameId, rating) {
    var requestUrl = GAMR_API_URL + "/games/" + gameId + "/vote";

    return axios.put(requestUrl, { rating: rating }).
      then(function (res) {
        return true;
      }, function (res) {
        var message = "Unreachable server error";
        if (res.data.errors[0] != undefined) {
          message = res.data.errors[0].title;
        }

        throw new Error(message);
      });
  }
}
