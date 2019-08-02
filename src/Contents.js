import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Repository from './pages/Repository'

export default class Contents extends Component {

    // constructor(props) {
    //     super(props);    
    // }
    
    render() {
        return (
            <div className="content">
                <div className="wrap-content">
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/:username/:repo" exact component={Repository}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }



}