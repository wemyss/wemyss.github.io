import 'styles/main';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from 'pages/Home/Home';
import Layout from 'pages/Layout/Layout';

// ReactDOM.render((
//    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
//       <Route path="/" component={Layout}>
//          <IndexRoute component={Home}/>
//       </Route>
//    </Router>
// ), document.getElementById('root'));
ReactDOM.render(<Layout/>, document.getElementById('root'));
