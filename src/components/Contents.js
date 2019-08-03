import React, { Component } from 'react';
import Home from './Home';
import {Route} from 'react-router-dom'

export default class Contents extends Component {
    
    render() {
        return (
            <div className="content">
                <div className="wrap-content">
                    <Route path="/"  component={Home}/>
                </div>
            </div>
        )
    }



}