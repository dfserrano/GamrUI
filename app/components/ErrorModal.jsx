var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },

  propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },

  /* Opens the pop up after the component is mounted */
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  /* Renders a pop up window that shows a title and a message */
  render: function () {
    var {title, message} = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
