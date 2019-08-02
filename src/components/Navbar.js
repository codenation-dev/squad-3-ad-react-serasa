import React from 'react'
import PropTypes from 'prop-types'
import Error                from '../components/Error'







const Navbar = ({ searchString , handleChange}) =>{
    
    
    return (
        
        
        <div>
            
            <div  className="field">
                
                <input 
                    value           = {searchString}
                    onChange        = {handleChange}
                    placeholderhide = ""
                    placeholder     = " "
                    type            = "search"
                    id              = "username"
                    className       = "searching"
                    
                />
                
                <label 
                    htmlFor="username">Usuário</label>
                
            </div>
            
        </div>
        
        
    )}
    
    


Navbar.propTypes = {
    searchString: PropTypes.string
}
export default Navbar