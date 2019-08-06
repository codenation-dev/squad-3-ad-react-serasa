import React, { Component } from 'react'
import error from '../utils/errors'

export default class Error extends Component {
    
    
    render(){
        const {type, code, close } = this.props
        
        if (type && code )  {
            
            return(
                <div>
                    <div className="box-error" >
                        <div className="overlay-error" onClick={close}></div>
                        <div className="wrap-error">
                            <div className="header-error">
                                <div className="header-error-title">
                                    Ocorreu um erro na tentativa de recuperar os dados 
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
