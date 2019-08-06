import React, { Component } from 'react';
import {Inputs, Input, Field, Label, Button, Form} from '../styles/Input';
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
        
        if (this.props.location.state && "username" in this.props.location.state)
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
                
                <h2>Crie um repositorio</h2>
                <p>Para criar um repositorio complete os formulario abaixo</p>
                
                    <Form onSubmit={this.handleSubmit}>
                        <Inputs>
                            <Field className="field">
                                <Input 
                                    name="username"
                                    readonly={readonly} 
                                    value={this.usernameURL || username}
                                    onChange={this.handleChange}
                                    placeholderhide = "" 
                                    placeholder = " "
                                    required="required"
                                    /> 
                                <Label>Username</Label>
                            </Field>
                            <Field className="field">
                                <Input
                                    name="password"
                                    value={password}
                                    type="password"
                                    onChange={this.handleChange}
                                    placeholderhide = "" 
                                    placeholder = " "
                                    required="required"
                                /> 
                                <Label>Senha</Label>
                                
                            </Field>
                            
                            
                            
                        </Inputs><Inputs>
                        <Field className="field">
                                <Input
                                    name="repositoryName"
                                    value={repositoryName}
                                    onChange={this.handleChange}
                                    placeholderhide = "" 
                                    placeholder = " "
                                    required="required"
                                /> 
                                <Label>Nome</Label>
                            </Field>
                        <Field className="checkbox">
                                <Input type="checkbox"
                                    name="isPrivate"
                                    value={isPrivate}
                                    onChange={this.handleChange}
                                    placeholderhide = "" 
                                    placeholder = " "
                                /> <Label>Privado ?</Label>
                            </Field>
                            </Inputs>
                            
                            <Field className="field">
                                <textarea
                                    name="description"
                                    value={description}
                                    onChange={this.handleChange}
                                    placeholderhide = "" 
                                    placeholder = " "
                                    required="required"
                                /> 
                                <Label>Descrição</Label>
                            </Field>
                            
                            
                        <Field className="field no-flex">
                                <Button className="button" type="submit">Criar</Button>
                        </Field>
                        
                    </Form>
                    
                    
                    
                    
            </div>
        )
    }
}

const mapDispatchToProps = {
    createRepo: userThunks.createRepo
}

export default connect(null, mapDispatchToProps)(CreateRepo);
