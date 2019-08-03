import React, { Component } from 'react'
import Navbar               from '../components/Navbar'
import GithubUserCard from '../components/GithubUserCard'


export default class Home extends Component {
    
    
    
    render() {
        return (
            <div className="Home">
                <Navbar />
                <GithubUserCard />
            </div>
        )
    }
    
}

