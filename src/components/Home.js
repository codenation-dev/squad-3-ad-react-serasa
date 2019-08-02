import React, { Component } from 'react'
import Card                 from './Card'
import api                  from '../services/api'
import Error                from '../components/Error'
import Navbar               from '../components/Navbar'
import { matchPath }        from 'react-router-dom'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    
    constructor( props ) {
        super(props);
        
        this.state = { 
            error       : false ,
        }
        this.handleChangeSearchString   = this.handleChangeSearchString.bind(this)
        this.closeBoxErrorEvent         = this.closeBoxErrorEvent.bind(this)
    }
    
    handleChangeSearchString({target :{ value }}) {
        this.props.history.push(`/${value}`)
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
        
        //console.log(this.getSearchString())
        return (
            <div className="Home">
                <Navbar searchString={this.getSearchString()}  handleChange={this.handleChangeSearchString} />
                <div className="field">
                    <Link className="button" to={`user/${this.getSearchString()}`}>Generate Card</Link>
                </div>
                
            </div>
        )
    }
    
}

