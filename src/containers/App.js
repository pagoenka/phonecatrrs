import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailsContainer from './PhoneDetailsContainer';

class App extends Component {
  render() {
    return (
        <div className="container-fluid text-center">
            <Router>
                <div>
                    <div>
                        <Route exact path="/" component={PhoneListContainer}/>
                        <Route exact path="/phoneDetails/:phoneName" component={PhoneDetailsContainer}/>
                    </div>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
