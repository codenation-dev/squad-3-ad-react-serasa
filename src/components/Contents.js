import React, { Component } from 'react';
import Home from './Home';
import {Route} from 'react-router-dom'
import GithubUserCard       from '../components/GithubUserCard'


export default class Contents extends Component {

/*     constructor(props) {
        super(props)
        
    } */
    
    render() {
        return (
            <div className="content">
                <div className="wrap-content">
                    <Route path="/"  component={Home}/>
                    <Route path = "/user/:searchString"    render = { props => <GithubUserCard {...props}  />} />
                </div>
            </div>
        )
    }



}