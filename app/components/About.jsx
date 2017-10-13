var React = require('react');

var About = React.createClass({
  /* Renders a message with information about the application */
  render: function () {
    return (
      <div className="about">
        <h1 className="text-center page-title">About</h1>
        <p className="about-text text-center">
          This is a Gamr, the test application created for CMPUT 401 - Fall 2017.
          <br/><br/>
          The application is based on the Udemy course<br/><a href="https://www.udemy.com/the-complete-react-web-app-developer-course">The Complete React Web App Developer Course</a>
        </p>

      </div>
    );
  }
});

module.exports = About;
