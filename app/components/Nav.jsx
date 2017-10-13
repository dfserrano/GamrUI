var React = require('react');
var {Link, IndexLink} = require('react-router');

/* Navigation component.  */
var Nav = React.createClass({

  /* Renders the top menu of the application */
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Gamr App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Vote</IndexLink>
            </li>
            <li>
              <Link to="/top" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Top 3</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
