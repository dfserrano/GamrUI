var React = require('react');
var ErrorModal = require('ErrorModal');
var gamrAPI = require('gamr');

var TopGames = React.createClass({

  /* Initializes the state of the component */
  getInitialState: function () {
    this.loadTopGames();

    return {
      isLoading: true
    }
  },

  /* Uses the Gamr API to retrieve the top 3 games */
  loadTopGames: function () {
    var that = this;

    gamrAPI.getTopGames().then(function (data) {
      setTimeout(function() {
        that.setState({
          games: data,
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

  /* Renders a table with the top 3 games */
  render: function () {
    var {isLoading, games, errorMessage} = this.state;
    var that = this;

    /* Shows the table with the top 3 */
    function renderPodium() {
      if (isLoading) {
        return <h5 className="text-center">Fetching game podium...</h5>;
      } else {

        if (games == undefined) {
          return <h5 className="text-center">Sorry, we could not fetch game podium...</h5>;
        }

        /* Gets CSS class for the badge, according to rank */
        var getBadgeClass = function (i) {
          if (i == 1) {
            return "badge gold";
          } else if (i == 2) {
            return "badge silver";
          } else {
            return "badge bronze";
          }
        };

        return (<table className="podium unstriped">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Game</th>
                      <th className="text-center">Rating</th>
                      <th className="text-center">Votes</th>
                    </tr>
                  </thead>
                  <tbody>
                  {games.map((game, i) =>
                    <tr key={i} className="podium-place">
                      <td><span className={getBadgeClass(i+1)}>{i+1}</span></td>
                      <td>{game.title}</td>
                      <td className="text-center">{Math.round(game.avgRating * 100)}%</td>
                      <td className="text-center">{game.votes}</td>
                    </tr>
                  )}
                  </tbody>
              </table>);
      }
    }

    /* Shows error if the error message is defined */
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
          <h2 className="text-center">Top 3</h2>
          {renderPodium()}
        </div>
        {renderError()}
      </div>
    )
  }
});

module.exports = TopGames;
