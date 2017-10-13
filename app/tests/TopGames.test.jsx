var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TopGames = require('TopGames');

describe('TopGames', () => {
  it('should exist', () => {
    expect(TopGames).toExist();
  });


  it('should load podium from API', (done) => {
    var topGames = TestUtils.renderIntoDocument(<TopGames/>);
    topGames.loadTopGames();

    setTimeout(function() {
      expect(topGames.state.games.length).toBe(3);

      topGames.state.games.forEach(function(game) {
        expect(game.title).toExist();
        expect(game.avgRating).toExist();
        expect(game.votes).toExist();
      });

      done();
    }, 200);
  });

  it('should render table with three places', (done) => {
    var topGames = TestUtils.renderIntoDocument(<TopGames/>);

    setTimeout(function() {
      expect(topGames.state.games.length).toBe(3);

      var $el = $(ReactDOM.findDOMNode(topGames));
      var podiumPlaces = $el.find('.podium-place');

      expect(podiumPlaces.length).toBe(3);

      done();
    }, 200);
  });

});
