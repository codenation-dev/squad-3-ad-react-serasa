import React, { Component } from 'react'
import Card                 from './Card'
import api                  from '../services/api'
import Error                from '../components/Error'
import Navbar               from '../components/Navbar'
import { matchPath }        from 'react-router-dom'
import GithubUserCard from '../components/GithubUserCard'


export default class Home extends Component {
    
    constructor( props ) {
        super(props);
        
        this.state = { 
            error       : false
        };

        this.closeBoxErrorEvent = this.closeBoxErrorEvent.bind(this)
    }    
    
    getSearchString = () => {
        
        const details = this.props.location.pathname.indexOf('/user/') > -1 ? "/user" : ""
        
        const match = matchPath(this.props.location.pathname, {
            path : details + "/:searchString",
            exact: true
        });
        return match && match.params ? match.params.searchString : ""
    };    
    
    closeBoxErrorEvent(){
        this.setState({
            error: false
        })
    }
    
    render() {
        return (
            <div className="Home">
                <Navbar />
                <GithubUserCard />
            </div>
        )
    }
    
}

