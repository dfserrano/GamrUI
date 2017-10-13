var React = require('react');
var ErrorModal = require('ErrorModal');
var gamrAPI = require('gamr');

var Vote = React.createClass({

  /* Initializes the state of the component */
  getInitialState: function () {
    this.loadRandomGame();

    return {
      isLoading: true
    }
  },

  /* Using the GamrAPI, loads a random game */
  loadRandomGame: function () {
    var that = this;

    gamrAPI.getRandom().then(function (data) {
      setTimeout(function() {
        that.setState({
          game: data,
          isLoading: false
        });
      }, 0);
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  /* Cast a vote */
  handleVote: function (rating) {
    var that = this;

    // Set as loading...
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    var gameId = this.state.game.id;

    gamrAPI.voteGame(gameId, rating).then(function (data) {
      // Gets next random game
      that.loadRandomGame();

    }, function (e) {
      // Trigger error message
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  /* Renders the game info and buttons */
  render: function () {
    var {isLoading, errorMessage, game} = this.state;
    var that = this;

    /* Shows buttons */
    function renderControls () {
      if (isLoading) {
        return <h5 className="text-center">Fetching random game...</h5>;
      } else {
        return (<form>
                  <div className="button-group expanded">
                    <a className="button like success" onClick={that.handleVote.bind(that, 1)}>LIKE</a>
                    <a className="button hate alert" onClick={that.handleVote.bind(that, 0)}>HATE</a>
                  </div>
                </form>);
      }
    }

    /* Shows a pop up with error message */
    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <div>
          <div className="card game-card">
            <div className="card-divider">
              <h3 className="text-center">{isLoading? "\u00A0" : game.title}</h3>
            </div>
            <img src={isLoading? "https://dummyimage.com/500x500/efefef/ffffff.jpg&text=..." : game.pic} />
            <div className="card-section">
              <p className="game-rating text-center">{isLoading? "\u00A0" : Math.round(game.avgRating * 100) + "%"}</p>
              <p className="game-votes text-center">{isLoading? "\u00A0" : game.votes + " votes"}</p>
            </div>
            <div className="card-section">
              {renderControls()}
            </div>
          </div>
        </div>
        {renderError()}
      </div>
    )
  }
});

module.exports = Vote;
