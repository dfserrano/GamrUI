var React = require('react');
var Nav = require('Nav');

/*
 * Main is the container of the entire application.
 * It uses a top div to host the navigation menu, and
 * a div to host a component based on the route
 */
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
