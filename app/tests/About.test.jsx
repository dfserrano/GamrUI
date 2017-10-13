var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var About = require('About');

describe('About', () => {
  it('should exist', () => {
    expect(About).toExist();
  });

  it('should render message', () => {
    var about = TestUtils.renderIntoDocument(<About/>);

    var $el = $(ReactDOM.findDOMNode(about));
    var actualText = $el.find('.about-text').text();

    expect(actualText.length).toBeGreaterThan(10);
  })
});
