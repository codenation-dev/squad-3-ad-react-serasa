import React, { Component } from 'react'
import error from '../utils/errors'
import styled from 'styled-components'



export default class Error extends Component {
    
    
    render(){
        const {type, code, close } = this.props
        
        if (type && code )  {
            
            return(
                <div>
                    <div 
                        className="box-error" >
                            
                            
                        <div className="overlay-error" onClick={close}></div>
                        <div className="wrap-error">
                            <div className="header-error">
                                <div className="header-error-title">
                                    Ocorreu um erro {code}-{type}
                                </div>
                                <div className="close-error-button" onClick={close}>x</div>
                            </div>
                            <div className="content-error">
                                {error[type][code].description}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
            
        }
        
    }
    
    
}