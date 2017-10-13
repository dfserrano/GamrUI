var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Vote = require('Vote');
var About = require('About');
var TopGames = require('TopGames');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="top" component={TopGames}/>
      <IndexRoute component={Vote}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
