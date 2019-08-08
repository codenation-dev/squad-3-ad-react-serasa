import React, { Component } from 'react';


export default class Footer extends Component {


    render() {
        return (
            <footer>
                <div className="footer-content">
                    {this.props.title}
                </div>
            </footer>
        )
    }


 
}