import React from 'react'
import { connect } from 'react-redux'
import userThunks from '../thunks/userThunks'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange({target :{ value }}) {
        this.setState({
            value
        });
    }

    handleClick(){
        const { getUser, getRepos } = this.props
        getUser(this.state.value)
        getRepos(this.state.value)
    }
    
    render(){
        
        return (
            <div>
                <div  className="field">
                    <input 
                        value           = {this.state.value}
                        onChange        = {this.handleChange}
                        placeholderhide = ""
                        placeholder     = " "
                        type            = "search"
                        id              = "username"
                        className       = "searching"
                    />
                    <label htmlFor="username">Usuário</label>
                </div>
                <div className="field">
                    <button className="button" onClick={this.handleClick}>
                        Generate Card
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getUser: username => dispatch(userThunks.getUser(username)),  
    getRepos: username => dispatch(userThunks.getRepos(username)),  
});

export default connect(null, mapDispatchToProps)(Navbar)