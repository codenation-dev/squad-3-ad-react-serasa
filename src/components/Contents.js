import React, { Component } from 'react';
import Home from './Home';
import {Route} from 'react-router-dom';
import Repositories from './Repositories';
import CreateRepo from './CreateRepo'

class Contents extends Component {
    render() {
        return (
            <div className="content">
                <div className="wrap-content">
                    <Route path="/" exact component={Home}/>
                    <Route path="/repos" component={Repositories}/>
                    <Route path="/user/repos" component={CreateRepo}/>
                </div>
            </div>
        )
    }
}

export default Contents;