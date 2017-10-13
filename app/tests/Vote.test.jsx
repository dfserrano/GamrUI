var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Vote = require('Vote');

describe('Vote', () => {
  it('should exist', () => {
    expect(Vote).toExist();
  });


  it('should load a random game', (done) => {
    var vote = TestUtils.renderIntoDocument(<Vote/>);
    vote.loadRandomGame();

    setTimeout(function() {
      expect(vote.state.game).toExist();
      expect(vote.state.game.title).toExist();
      expect(vote.state.game.avgRating).toExist();
      expect(vote.state.game.votes).toExist();

      done();
    }, 200);
  });

  it('should load a new random game on like', (done) => {
    var vote = TestUtils.renderIntoDocument(<Vote/>);
    var $el = $(ReactDOM.findDOMNode(vote));
    setTimeout(function() {
      var prevGameId = vote.state.game.id;
      TestUtils.Simulate.click($el.find('.like')[0]);

      setTimeout(function() {
        var newGameId = vote.state.game.id;

        expect(newGameId).toNotBe(prevGameId);

        done();
      }, 200);

    }, 200);
  });

  it('should load a new random game on hate', (done) => {
    var vote = TestUtils.renderIntoDocument(<Vote/>);
    var $el = $(ReactDOM.findDOMNode(vote));
    setTimeout(function() {
      var prevGameId = vote.state.game.id;
      TestUtils.Simulate.click($el.find('.hate')[0]);

      setTimeout(function() {
        var newGameId = vote.state.game.id;

        expect(newGameId).toNotBe(prevGameId);

        done();
      }, 200);

    }, 200);
  });


});
