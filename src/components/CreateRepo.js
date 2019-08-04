import React, { Component } from 'react';
import {Inputs, Input} from '../styles/Input';
import {connect} from 'react-redux'
import userThunks from '../thunks/userThunks'

class CreateRepo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: "",
            repositoryName: "",
            description: "",
            isPrivate: false,
            token: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.usernameURL = this.props.location.state.username;
    }

    handleChange({target:{name, value}}){
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        
        const {username, password, repositoryName, description, isPrivate} = this.state;

        this.props.createRepo({
            username: this.usernameURL || username, 
            password,
            name: repositoryName,
            description, 
            isPrivate
        });
    }
    
    render() {
        const readonly = !!this.usernameURL;
        const { username, password, repositoryName, description, isPrivate } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Inputs>
                        <Input 
                            name="username"
                            readonly={readonly} 
                            value={this.usernameURL || username}
                            onChange={this.handleChange}
                            /> Username
                        <Input
                            name="password"
                            value={password}
                            type="password"
                            onChange={this.handleChange}
                        /> Senha
                    </Inputs>
                    <Inputs>
                        <Input
                            name="repositoryName"
                            value={repositoryName}
                            onChange={this.handleChange}
                        /> Nome
                        <Input
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        /> Descrição
                        <Input type="checkbox"
                            name="isPrivate"
                            value={isPrivate}
                            onChange={this.handleChange}
                        /> Privado?
                    </Inputs>
                    <button type="submit">
                        Criar
                    </button>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createRepo: config => dispatch(userThunks.createRepo(config))
})

export default connect(null, mapDispatchToProps)(CreateRepo);
